import { Db, MongoClient } from "mongodb";

export type Query<T> = (db: Db) => Promise<T>;

export interface ProcessEnv {
  [key: string]: string | undefined;
}

export interface Connection {
  readonly clientInstance: MongoClient;
  readonly db: Db;
}

export interface ConnectionInfo {
  readonly uri: string;
  readonly dbName: string;
}

export type Connect = (uri: string, dbName: string) => Promise<Connection>;

export type Disconnect = (client: MongoClient) => Promise<void>;

export type RunQuery = <T>(
  uri: string,
  dbName: string,
  query: Query<T>
) => Promise<T>;

export type CloseTestDb = (connection: Connection) => Promise<void>;

export type PrepareTestDb = (dbName: string) => Promise<Connection>;

export type GetConnectionInfo = (processEnv: ProcessEnv) => ConnectionInfo;
