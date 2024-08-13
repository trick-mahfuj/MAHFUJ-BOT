module.exports.config = {
  name: "/",
  version: "1.0.0", 
  permssion: 0,
  credits: "Islamick Cyber Chat", 
  prefix: 'false',
  description: " stutus video",
  category: "system video", 
  usages: "", 
  cooldowns: 0,
  dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const res = await axios.get(`https://all-api-ius8.onrender.com/video/status2`);
    var data = res.data.data;
    var msg = [];
    let img1 = `${res.data.url.url}`;
    let cp = `${res.data.url.title}`
    let Shaon = `${res.data.author}`

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.mp4", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.mp4"));

    {
        msg += `°\n\n__${cp}\n\n🍂𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 : 𝚂𝙷𝙰𝙾𝙽 𝙰𝙷𝙼𝙴𝙳...🌸`

    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
      }
