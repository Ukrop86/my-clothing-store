const db = require('../models/db');

exports.getAllProducts = (req, res) => {
  db.all("SELECT * FROM products", (err, rows) => {
    if (err) {
      res.status(500).send("Database error");
    } else {
      res.render('index', { products: rows });
    }
  });
};
