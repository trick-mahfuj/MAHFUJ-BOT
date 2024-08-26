const axios = require('axios')
const path = require('path')
const fs = require('fs')
  module.exports.config = {
  name: "add",
  version: "11.9.7",
  permission: 0,
  credits: "Shaon Ahmed",
  prefix: true,
  description: "random love story video",
  category: "video",
  usages: "random",
  cooldowns: 30,
};
exports.run = async ({api, event, args}) =>{
 try {
const URL = event.messageReply.attachments[0].url;
        const response = await axios.get(`https://all-api-ius8.onrender.com/imgurv2?link=${encodeURIComponent(URL)}`);
        const imgurLink = response.data.uploaded.image;
        const fileExtension = path.extname(imgurLink);
        const svRes = await axios.get(`https://all-api-ius8.onrender.com/video/random?name=${imgurLink}`);
const data = svRes.data;
     //   console.log(data);
        api.sendMessage(`✅ | ${data.url}\n\n🔰 | ${data.name}`, event.threadID, event.messageID);
    } catch (error) {console.error('Error:', error);api.sendMessage(`Failed to convert image.\n${error}`, event.threadID, event.messageID);
}
}
