ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine AS base

FROM base AS builder

WORKDIR /app
COPY . .

RUN apk update && \
    apk add --no-cache \
    libc6-compat && \
    yarn global add turbo && \
    turbo prune --scope=docs --docker

FROM base AS installer

WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

ARG TURBO_TEAM \
    TURBO_TOKEN

ENV TURBO_TEAM=${TURBO_TEAM} \
    TURBO_TOKEN=${TURBO_TOKEN}

RUN apk update && \
    apk add --no-cache \
    libc6-compat && \
    corepack enable && \
    pnpm i && \
    pnpm turbo run build --filter=docs...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

COPY --from=installer /app/apps/docs/next.config.mjs .
COPY --from=installer /app/apps/docs/package.json .
COPY --from=installer /app/apps/docs/public ./apps/docs/public

COPY --from=installer --chown=nextjs:nodejs /app/apps/docs/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/docs/.next/static ./apps/docs/.next/static

ENV PORT=8080 \
    NODE_ENV=production

EXPOSE 8080

CMD node apps/docs/server.js