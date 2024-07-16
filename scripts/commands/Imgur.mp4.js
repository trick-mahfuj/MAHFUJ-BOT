module.exports.config = {
  name: "imgur",
  version: "1.0.0", 
  permssion: 0,
  prefix: true,
  credits: "Islamick Cyber Chat",
  description: "create your video link",
  category: "other", 
  usages: "[tag]", 
  cooldowns: 0,
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
  if(!linkanh) return api.sendMessage('╭•┄┅════❁SHAON PROJECT❁════┅┄•╮\n\n আসসালামু আলাইকুম-!!🖤💫\n আপনি যেই ছোবি টাকে Imgur link বানাতে চান সেই ছোবি টা imgur লিখে রিপ্লাই করুন \n\n╰•┄┅════❁SHAON PROJECT❁════┅┄•╯', event.threadID, event.messageID)
const res = await axios.get(`https://all-api-ius8.onrender.com/imgurv2?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
  return api.sendMessage(`"${img}",`, event.threadID, event.messageID);
}
