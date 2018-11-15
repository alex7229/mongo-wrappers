import * as dotenv from "dotenv";
import { PrepareTestDb } from "../types";
import { getConnectionInfo } from "../getConnectionInfo";
import { connect } from "../connect";

dotenv.load();

export const prepareTestDb: PrepareTestDb = async dbName => {
  const connectionInfo = getConnectionInfo(process.env);
  return await connect(
    connectionInfo.uri,
    dbName
  );
};
