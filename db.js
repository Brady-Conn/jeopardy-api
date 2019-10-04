const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/jeopardy', {useNewUrlParser: true});

const db = mongoose.connection;

db.once('open', () => {
  console.log('connected to db')
})


const questionSchema = new mongoose.Schema({
  category: String,
  air_date: Date,
  question: String,
  value: String,
  answer: String,
  round: String,
  show_number: String
});

const Question = mongoose.model('Question', questionSchema)

module.exports = { db, Question };