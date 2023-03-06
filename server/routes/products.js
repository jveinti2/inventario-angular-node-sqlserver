const { Router } = require("express");
const sql = require("mssql");
const router = Router();

//Requerir base de datos
const { getConnection } = require("../database");

//Routes
router.get("/", async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM products");
  res.send(result.recordset);
});
router.post("/", async (req, res) => {
  const { id_ref, title, description, category, price } = req.body;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id_ref", sql.Text, id_ref)
    .input("title", sql.Text, title)
    .input("description", sql.Text, description)
    .input("category", sql.Text, category)
    .input("price", sql.Int, price)
    .query(
      "INSERT INTO products (id_ref, title, description, category, price) VALUES (@id_ref, @title, @description, @category, @price)"
    );
  res.send({ messagge: 'Producto creado' });
});

module.exports = router;
