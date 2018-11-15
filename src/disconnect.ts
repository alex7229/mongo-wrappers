import { Disconnect } from "./types";

export const disconnect: Disconnect = async client => {
  await client.close();
};
