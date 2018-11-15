import { MongoClient } from "mongodb";
import { Connect } from "./types";

export const connect: Connect = async (uri, dbName) => {
  const clientInstance = await MongoClient.connect(
    uri,
    { useNewUrlParser: true }
  );
  return {
    clientInstance,
    db: clientInstance.db(dbName)
  };
};
