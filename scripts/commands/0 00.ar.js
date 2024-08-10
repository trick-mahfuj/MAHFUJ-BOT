const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "tik",
  version: "1.6.9",
  hasPermission: 0,
  credit : "Nazrul",
  prefix: true,
  description: "Tiktok Video Downloader",
  category: "Downloader",
  usage: "[just send link]",
  cooldowns: 2
};

module.exports.handleEvent = async function ({ api, event }) {
  let msg = event.body ? event.body : '';
  
  if (msg.startsWith('https://www.tiktok.com') || msg.startsWith('https://www.vt.tiktok.com') ||
  msg.startsWith('https://vm.tiktok.com')) {
    try {
      api.sendMessage("🔰 downloading Facebook Video please wait...", event.threadID, event.messageID);

      const path = __dirname + `/cache/tik_${event.threadID}_${Date.now()}.mp4`;

      const res = await axios.get(`https://all-api-ius8.onrender.com/tiktok/downloadvideo?url=${encodeURIComponent(msg)}`);
      if (!res.data.data || !res.data.play) {
        api.sendMessage("Failed to retrieve video. Please check the link and try again.", event.threadID, event.messageID);
        return;
      }

      const videoBuffer = (await axios.get(res.data.play, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(path, Buffer.from(videoBuffer, 'binary'));

      api.sendMessage({
        body: "🔰 Successfully Downloaded Tiktok Video ",
        attachment: fs.createReadStream(path)
      }, event.threadID, () => fs.unlinkSync(path), event.messageID);

    } catch (error) {
      api.sendMessage(`An error occurred: ${error.message}`, event.threadID, event.messageID);
    }
  }
};

exports.run = function ({ api, event }) {
  api.sendMessage("Please provide a valid Tiktok video link.", event.threadID, event.messageID);
};
