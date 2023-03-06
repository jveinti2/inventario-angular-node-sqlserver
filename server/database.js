//Requerir el modulo
const sql = require("mssql");

//Sql objeto de conexión
const sqlConfig = {
  user: "root2",
  password: "root2",
  database: "newDb",
  server: "localhost",
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

//Funcion de conexión
async function getConnection() {
  try {
    const pool = await sql.connect(sqlConfig);
    return pool;
  } catch (error) {
    console.error(error);
  }
}

exports.getConnection = getConnection;
