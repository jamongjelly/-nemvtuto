var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const us = [
    {
      name: '김채원',
      age: '21',
      src: 'https://thumb.mtstarnews.com/06/2019/09/2019092509311762773_1.jpg'
    },
    {
      name: '조유리',
      age: '20',
      src: 'https://image.news1.kr/system/photos/2018/12/11/3426396/article.jpg'
    }
  ]
  res.send({ users: us });
});

router.get('/', function(req, res, next) {
  console.log(req.query)
  console.log(req.body)
  res.send({ users: us })
});

router.post('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({ success: true , msg: 'post ok'})
});

router.put('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({ success: true, msg: 'put ok' })
});

router.delete('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({ success: true, msg: 'del ok' })
});

router.all('*', function(req, res, next) {
  next(createError(503, '그런 api 없어요~'));
});

module.exports = router;
