import { Db, MongoClient } from "mongodb";

export type Query<T> = (db: Db) => Promise<T>;

export interface Connection {
  readonly clientInstance: MongoClient;
  readonly db: Db;
}

export type Connect = (uri: string, dbName: string) => Promise<Connection>;

export type Disconnect = (client: MongoClient) => Promise<void>;

export type RunQuery = <T>(
  uri: string,
  dbName: string,
  query: Query<T>
) => Promise<T>;
