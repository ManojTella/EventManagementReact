const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

let events = [
  { id: 1, name: 'Cricket', date: '2024-07-20' },
  { id: 2, name: 'Drawing', date: '2024-07-25' },
];

let registrations = [];

app.get('/events', (req, res) => {
  res.json(events);
});

app.post('/register', (req, res) => {
  const { userId, eventId } = req.body;
  registrations.push({ userId, eventId });
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
