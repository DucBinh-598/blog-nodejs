const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Blog cá nhân của tôi!');
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});