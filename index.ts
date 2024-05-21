console.log("Hello via Bun!");

export const baz = 'xxx'

const a = await import("./a.ts");

console.log(a.default());
