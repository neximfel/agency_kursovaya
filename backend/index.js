const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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
    res.status(500).json({ error: 'ошибка при получении слайдов' });
  }
});

app.get('/api/company_events', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM company_events ORDER BY id ASC');
    res.json(result.rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'ошибка при получении мероприятий' });
  }
});

app.get('/api/reviews', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reviews ORDER BY id ASC');
    res.json(result.rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'ошибка при получении отзывов' });
  }
});

app.post('/api/subscribe', async (req, res) => {
  try {
    const result = await pool.query(
      'INSERT INTO newsletter_subscribers (email) VALUES ($1) RETURNING *',
      [req.body.email]
    );
    res.json(result.rows[0]);
  } catch (e) {
    console.error('ошибка', e.message);
    res.status(500).json({ error: 'ошиюбка' });
  }
});

app.listen(5000, () => console.log('Сервер крутится на порту 5000'));