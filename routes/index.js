var express = require('express');
var router = express.Router();



// Messages array 

const messages = [

  {
    text: 'Hi there!',
    name: 'Rui',
    date: new Date()
  },
  {
    text: 'Hello world!',
    name: 'Filipe',
    date: new Date()
  },
  
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini message board', author: 'Rui Filipe', exclamation: '!', messagesArray: messages});
});

router.post('/new', (req, res, next) => {

  const user = req.body.user;
  const message = req.body.messageUser;

  messages.push({text: message, name: user, date: new Date()});

  res.redirect('/');

});

module.exports = router;
