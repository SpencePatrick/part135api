var jwt = require('jsonwebtoken');
var dotenv =  require('dotenv');
dotenv.config();
const key = process.env.KEY;
console.log(key);
const Token = function({ id }) {
  jwt.sign({ id }, key, {expiresIn: '2h'});
}

exports.Token = Token;
