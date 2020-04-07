const path = require('path');
const express = require('express');
const hbs = require('hbs');
const sass = require('node-sass-middleware');
// const sendMail = require('./mailer');
// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));
const app = express();
const publicDirectory = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');
app.use(
  sass({
      src: publicDirectory,    // Input SASS files
      dest: publicDirectory, // Output CSS
      debug: false                
  })
);
app.use(express.static(publicDirectory)); // use index.html static file as homepage
app.set('view engine', 'hbs'); // set views as default view
app.set('views', viewPath); // set views path folder
hbs.registerPartials(partialPath); // register header, footer 

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

app.get('*', (req, res) => {
  res.render('error-page', {
    code: '404',
    errorMessage: 'Page Not Found.'
  })
})


app.listen(3000);