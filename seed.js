const { db, Question } = require('./db');

const data = require('./jep-data.json');

Question.insertMany(data, (err) => console.error(err));