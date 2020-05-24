const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.use('/', router);
app.listen(process.env.port || 3000);