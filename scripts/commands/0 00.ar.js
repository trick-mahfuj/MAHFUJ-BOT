const axios = require('axios')
const fs = require('fs')
  module.exports.config = {
  name: "tik",
  version: "1.0.1",
  permssion: 0,
  credits: "Islamick Chat",
  prefix: true,
  description: "Text translation",
  category: "media",
  usages: "[en/ar/bn/vi] [Text]",
  cooldowns: 5,
  dependencies: {
    "request":  ""
  }
};
module.exports.run = async function ({ api, event, args }) { 
  let shaon = event.body ? event.body : '';
  try {
if (shaon.startsWith('https://vt.tiktok.com') ||
shaon.startsWith("https://vm.tiktok.com")){
  
  api.sendMessage("wait baby", event.threadID, event.messageID);
  if (!shaon)
  {
    api.sendMessage("please put a valid fb video link", event.threadID, event.messageID);
    return;
  }  try {
   let path = __dirname + `/cache/`;
    let res = await axios.get(`https://all-api-ius8.onrender.com/tiktok/downloadvideo?url=${encodeURIComponent(shaon)}`);
    //await fs.ensureDir(path);
   path += 'tik_dip.mp4';
    const data = res.data.data;
    const vid = (await axios.get(data.play, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(vid, 'stream'));
    api.sendMessage({
      body: `✅Title:${data.title}.\n✅Play Count: ${data.play_count}.\n✅Comment Count: ${data.comment_count}.\n✅Share Count: ${data.share_count}.\n✅Download Count: ${data.download_count}`, attachment: fs.createReadStream(path)
    }, event.threadID, () => fs.unlinkSync(path), event.messageID);

  } catch (e) {
    api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
};
