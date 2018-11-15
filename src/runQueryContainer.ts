import { RunQueryContainer } from "./types";
import * as dotenv from "dotenv";
import { getConnectionInfo } from "./getConnectionInfo";
import { runQuery } from "./runQuery";

dotenv.load();

export const runQueryContainer: RunQueryContainer = query => {
  const connectionInfo = getConnectionInfo(process.env);
  return runQuery(connectionInfo.uri, connectionInfo.dbName, query);
};
