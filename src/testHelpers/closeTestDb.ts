import { CloseTestDb } from "../types";

export const closeTestDb: CloseTestDb = async connection => {
  await connection.db.dropDatabase();
  await connection.clientInstance.close();
};
