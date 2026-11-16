const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors()); // Чтобы React с другого порта не ругался на CORS

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: 'password',
  port: 5432,
});

app.get('/api/slides', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM slider_images ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка при получении слайдов' });
  }
});

app.listen(5000, () => console.log('Сервер крутится на порту 5000'));