import { GetConnectionInfo } from "./types";

export const getConnectionInfo: GetConnectionInfo = processEnv => {
  const isProd = processEnv.NODE_ENV === "production";
  const uri = isProd ? processEnv.MONGODB_URI : processEnv.MONGODB_URI_LOCAL;
  const dbName = isProd
    ? processEnv.MONGODB_NAME
    : processEnv.MONGODB_NAME_LOCAL;
  if (typeof uri !== "string" || typeof dbName !== "string") {
    throw new Error("db uri or db name is not set in .env");
  }
  return { uri, dbName };
};
