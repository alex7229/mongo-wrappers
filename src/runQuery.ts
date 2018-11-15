import { connect } from "./connect";
import { RunQuery } from "./types";

export const runQuery: RunQuery = async (uri, dbName, query) => {
  const { clientInstance, db } = await connect(
    uri,
    dbName
  );
  const result = await query(db);
  await clientInstance.close();
  return result;
};
