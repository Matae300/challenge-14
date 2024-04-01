const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
 
  res.render('homepage');
});

router.get('/dashboard', (req, res) => {

  res.render('dashboard');
});

router.get('/login', (req, res) => {

  res.render('login');
});

module.exports = router;
