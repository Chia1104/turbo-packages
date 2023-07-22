import { readFile, writeFile } from "fs/promises";
import { defineConfig, type Options } from "tsup";

const client = [
  "./src/button/button.tsx",
];

export default defineConfig((opts) => {
  const common = {
    dts: true,
    format: ["esm"],
    minify: true,
    outDir: "dist",
    skipNodeModulesBundle: true,
  } satisfies Options;

  return [
    {
      ...common,
      entry: ["./src/index.ts"],
      esbuildOptions: (opts) => {
        opts.banner = {
          js: '"use client";',
        };
      },
    },
    {
      ...common,
      entry: client,
      esbuildOptions: (opts) => {
        opts.banner = {
          js: '"use client";',
        };
      },
      async onSuccess() {
        const pkgJson = JSON.parse(
          await readFile("./package.json", {
            encoding: "utf-8",
          })
        ) as PackageJson;
        pkgJson.exports = {
          "./package.json": "./package.json",
          ".": {
            import: "./dist/index.mjs",
            types: "./dist/index.d.ts",
          },
        };
        [...client]
          .filter((e) => e.endsWith(".tsx"))
          .forEach((entry) => {
            // ./src/foo.tsx -> foo
            const file = entry.split("/").pop()?.split(".")[0] ?? "";
            pkgJson.exports["./" + file] = {
              import: "./dist/" + file + ".mjs",
              types: "./dist/" + file + ".d.ts",
            };
            pkgJson.typesVersions["*"][file] = [
              "./dist/" + file + ".d.ts",
            ];
          });

        await writeFile("./package.json", JSON.stringify(pkgJson, null, 2));
      },
    },
  ] satisfies Options[];
});

type PackageJson = {
  name: string;
  exports: Record<string, { import: string; types: string } | string>;
  typesVersions: Record<"*", Record<string, string[]>>;
  files: string[];
  dependencies: Record<string, string>;
  pnpm: {
    overrides: Record<string, string>;
  };
};
