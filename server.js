const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve all files (HTML, CSS, JS, images) from this folder
app.use(express.static(__dirname));

// Root (home) page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Form page
app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

// About Us page
app.get('/about_us', (req, res) => {
  res.sendFile(path.join(__dirname, 'about_us.html'));
});

// Contact page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// What page
app.get('/what', (req, res) => {
  res.redirect('/');
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
