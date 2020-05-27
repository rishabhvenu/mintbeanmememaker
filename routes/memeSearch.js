const Express = require('express');
const NodeFetch = require("node-fetch");
const StringSimilarity = require("string-similarity");
const router = Express.Router();

router.get('/', async function(req, res, next) {
  const imgUrl = await getImgMeme(req.query.id, req.query.top, req.query.bottom);
  res.render("memefound", {
    memeurl: imgUrl,
    memeId: req.query.id,
  });
});

async function getImgMeme(id, toptext, bottomtext) {
  console.log(id);
  const data = await (await NodeFetch("https://api.imgflip.com/caption_image", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `template_id=${id}&username=TheOriginalAse&password=isdc3333&text0=${toptext}&text1=${bottomtext}`
  })).json();
  
  return data.data.url;
}



module.exports = router;
