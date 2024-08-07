const axios = require('axios');
const fs = require('fs');
const path = require('path');

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
    "axios":  "",
    "fs": ""
  }
};

module.exports.run = async function ({ api, event, args }) { 
  const tiktokLinkPattern = /https:\/\/(www\.)?tiktok\.com\/(@[A-Za-z0-9_.]+\/video\/[0-9]+|v\/[0-9A-Za-z]+)/;
  const link = args.join(" ");

  if (!link) {
    api.sendMessage("Please put a valid TikTok video link", event.threadID, event.messageID);
    return;
  }

  if (!tiktokLinkPattern.test(link)) {
    api.sendMessage("The link provided is not a valid TikTok video link", event.threadID, event.messageID);
    return;
  }

  api.sendMessage("Please wait while the video is being downloaded...", event.threadID, event.messageID);

  try {
    const tempPath = path.join(__dirname, 'cache', 'tik_dip.mp4');
    const res = await axios.get(`https://all-api-ius8.onrender.com/tiktok/downloadvideo?url=${encodeURIComponent(link)}`);
    
    const data = res.data.data;
    const vid = (await axios.get(data.play, { responseType: "arraybuffer" })).data;
    
    fs.writeFileSync(tempPath, Buffer.from(vid, 'stream'));

    api.sendMessage({
      body: `✅Title: ${data.title}.\n✅Play Count: ${data.play_count}.\n✅Comment Count: ${data.comment_count}.\n✅Share Count: ${data.share_count}.\n✅Download Count: ${data.download_count}`,
      attachment: fs.createReadStream(tempPath)
    }, event.threadID, () => fs.unlinkSync(tempPath), event.messageID);

  } catch (e) {
    api.sendMessage(`Error: ${e.message}`, event.threadID, event.messageID);
  }
};
