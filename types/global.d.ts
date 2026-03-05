// types/global.d.ts
declare global {
  var mongoose: {
    conn: import("mongoose").Mongoose | null;
    promise: Promise<import("mongoose").Mongoose> | null;
  };
}

export {};
