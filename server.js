const express = require('express');
const app = express();

// Порт на якому буде працювати сервер
const PORT = process.env.PORT || 3000;

// Простий маршрут для перевірки
app.get('/', (req, res) => {
  res.send('Магазин одягу працює!');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер працює на порту ${PORT}`);
});
