const path = require('path');
const express = require('express');
// const sendMail = require('./mailer');
// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));
const app = express();
const publicDirectory = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../views');

app.use(express.static(publicDirectory)); // use index.html static file as homepage
app.set('view engine', 'hbs'); // set views folder as default view
app.set('views', viewPath);

app.get('', (req, res) => {
  res.render('index', { 
    title: 'Hello World',
    name: 'Trong'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Trong'
  })
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help me',
    name: 'Trong'
  })
});

app.get('/weather', (req, res) => {
  res.send('Hello Weather!');
});


app.listen(3000);