import { createConnection, getConnectionOptions } from "typeorm";
import { ormConfig } from "../config/orm";

const createDBConnection = async () => {
  const connectionOptions = await getConnectionOptions();
  const connection = await createConnection(
    Object.assign(connectionOptions, {
      ...ormConfig,
    })
  );

  console.log("✌️ Database Connected");
  return connection;
};

export default createDBConnection;
