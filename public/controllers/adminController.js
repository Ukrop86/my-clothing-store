const db = require('../models/db');

exports.getAdminPage = (req, res) => {
  db.all("SELECT * FROM products", (err, rows) => {
    if (err) {
      res.status(500).send("Database error");
    } else {
      res.render('admin', { products: rows });
    }
  });
};

exports.addProduct = (req, res) => {
  const { name, description, price, image } = req.body;
  db.run("INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)", [name, description, price, image], (err) => {
    if (err) {
      res.status(500).send("Error adding product");
    } else {
      res.redirect('/admin');
    }
  });
};

exports.deleteProduct = (req, res) => {
  const { product_id } = req.body;
  db.run("DELETE FROM products WHERE id = ?", [product_id], (err) => {
    if (err) {
      res.status(500).send("Error deleting product");
    } else {
      res.redirect('/admin');
    }
  });
};

exports.editProduct = (req, res) => {
  const { product_id, name, description, price, image } = req.body;
  db.run("UPDATE products SET name = ?, description = ?, price = ?, image = ? WHERE id = ?", [name, description, price, image, product_id], (err) => {
    if (err) {
      res.status(500).send("Error updating product");
    } else {
      res.redirect('/admin');
    }
  });
};
