var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');
dotenv.config();
console.log('this is being called');
module.exports = (req, res, next) => {
  const token = req.headers['x-access-token'];
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: 'Authorization failed',
        });
       } else {
         req.decoded = decoded;
         console.log(decoded);
         next();
       }
     });
   } else {

      return res.status(401).json({
        message: 'Authorization failed',
      });
   }

}
