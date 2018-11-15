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
export const connect: Connect;

export type Disconnect = (client: MongoClient) => Promise<void>;
export const disconnect: Disconnect;

export type RunQuery = <T>(
  uri: string,
  dbName: string,
  query: Query<T>
) => Promise<T>;
export const runQuery: RunQuery;

export type CloseTestDb = (connection: Connection) => Promise<void>;
export const clostTestDb: CloseTestDb;

export type PrepareTestDb = (dbName: string) => Promise<Connection>;
export const prepareTestDb: PrepareTestDb;

export type GetConnectionInfo = (processEnv: ProcessEnv) => ConnectionInfo;
export const getConnectionInfo: GetConnectionInfo;
