var express = require('express');
const NodeFetch = require("node-fetch");
var router = express.Router();

/* GET gallery page. */
router.get('/', async function(req, res, next) {
  const data = await getPopularMemes();
  res.render('index', {
    memes: data,
  });
});

async function getPopularMemes() {
  const data = await (await NodeFetch("https://api.imgflip.com/get_memes")).json();
  const memeArr = [];
  
  if (!data.success) console.log(data.error_message);
  data.data.memes.forEach(memeData => memeArr.push({
    url: memeData.url,
    id: memeData.id
  }));

  return memeArr;
  
}

module.exports = router;
