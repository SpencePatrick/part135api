var jwt = require('jsonwebtoken');
var dotenv =  require('dotenv');
dotenv.config();
const key = process.env.KEY;

exports.token = function({ id }) {
  return jwt.sign({ id }, key, {expiresIn: '2h'});
}
