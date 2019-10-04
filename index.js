const express = require('express');
const { db, Question } = require('./db');

const app = express();

app.listen(3000, () => console.log('listening on port 3000'));

app.get('/questions', (req, res) => {
  const pageOptions = {
    page: req.query.page || 0,
    limit: req.query.limit || 10
  }

Question.find()
    .skip(pageOptions.page*pageOptions.limit)
    .limit(pageOptions.limit)
    .exec((err, doc) => {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(doc);
    })
})