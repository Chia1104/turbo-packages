import setSearchParams from "./set-search-params";
import { describe, expect, it } from "vitest";

describe("setSearchParams", () => {
  it("should return empty string if no params are passed", () => {
    expect(setSearchParams()).toEqual("");
  });

  it("should return empty string if foo param is undefined", () => {
    expect(setSearchParams({ foo: undefined })).toEqual("");
  });

  it("should return empty string if foo param is null", () => {
    expect(setSearchParams({ foo: null })).toEqual("");
  });

  it("should return 'foo=bar' if foo param is 'bar'", () => {
    expect(setSearchParams({ foo: "bar" })).toEqual("foo=bar");
  });

  it("should return 'foo=bar&baz=qux' if foo param is 'bar' and baz param is 'qux'", () => {
    expect(setSearchParams({ foo: "bar", baz: "qux" })).toEqual(
      "foo=bar&baz=qux"
    );
  });

  it("should return 'foo=bar&baz=qux' if foo param is 'bar' and baz param is 'qux' and baseUrl is 'https://example.com'", () => {
    const result = setSearchParams(
      { foo: "bar", baz: "qux" },
      { baseUrl: "https://example.com" }
    );
    expect(result).toEqual("https://example.com?foo=bar&baz=qux");
  });

  it("should return 'foo=bar&baz=qux' if foo param is 'bar' and baz param is 'qux' and baseUrl is 'https://example.com/'", () => {
    const result = setSearchParams(
      { foo: "bar", baz: "qux" },
      { baseUrl: "https://example.com/" }
    );
    expect(result).toEqual("https://example.com?foo=bar&baz=qux");
  });
  it("should return 'foo=bar&baz=qux' if foo param is 'bar' and baz param is 'qux' and baseUrl is 'https://example.com?'", () => {
    const result = setSearchParams(
      { foo: "bar", baz: "qux" },
      { baseUrl: "https://example.com?" }
    );
    expect(result).toEqual("https://example.com?foo=bar&baz=qux");
  });
  it("should return 'foo=bar&baz=qux' if foo param is 'bar' and baz param is 'qux' and baseUrl is 'https://example.com/?'", () => {
    const result = setSearchParams(
      { foo: "bar", baz: "qux" },
      { baseUrl: "https://example.com/?" }
    );
    expect(result).toEqual("https://example.com/?foo=bar&baz=qux");
  });

  it("should return 'foo=bar&baz=qux' if foo param is 'bar' and baz param is 'qux' and baseUrl is '/v1/api'", () => {
    const result = setSearchParams(
      { foo: "bar", baz: "qux" },
      { baseUrl: "/v1/api" }
    );
    expect(result).toEqual("/v1/api?foo=bar&baz=qux");
  });
});
