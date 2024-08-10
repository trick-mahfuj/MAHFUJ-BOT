const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "fb",
  version: "1.6.9",
  hasPermission: 0,
  credit : "Nazrul",
  Prefix: true,
  description: "Facebook Video Downloader",
  category: "Downloader",
  usage: "[just send link]",
  cooldowns: 2
};

module.exports.handleEvent = async function ({ api, event }) {
  let msg = event.body ? event.body : '';
  
  if (msg.startsWith('https://www.facebook.com') || msg.startsWith('https://fb.watch')) {
    try {
      api.sendMessage("🔰 downloading Facebook Video please wait...", event.threadID, event.messageID);

      const path = __dirname + `/cache/fb_${event.threadID}_${Date.now()}.mp4`;

      const res = await axios.get(`https://all-api-ius8.onrender.comTap on a clip to paste it in the text box.Welcome to Gboard clipboard, any text that you copy will be saved here./fbdl?url=${encodeURIComponent(msg)}`);
      if (!res.data || !res.data.sd) {
        api.sendMessage("Failed to retrieve video. Please check the link and try again.", event.threadID, event.messageID);
        return;
      }

      const videoBuffer = (await axios.get(res.data.sd, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(path, Buffer.from(videoBuffer, 'binary'));

      api.sendMessage({
        body: "🔰 Successfully Downloaded Facebook Video ",
        attachment: fs.createReadStream(path)
      }, event.threadID, () => fs.unlinkSync(path), event.messageID);

    } catch (error) {
      api.sendMessage(`An error occurred: ${error.message}`, event.threadID, event.messageID);
    }
  }
};

exports.run = function ({ api, event }) {
  api.sendMessage("Please provide a valid Facebook video link.", event.threadID, event.messageID);
};
