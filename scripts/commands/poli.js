module.exports.config = {
  name: "img",
  version: "1.0.",
  permission: 0,
  prefix: 'awto',
  credits: "Islamick Cyber Chat",
  description: "generate image from pollination",
  category: "user",
  usages: "img ai",
  cooldowns: 2,
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const fs = require('fs-extra');
  let { threadID, messageID } = event;
  let query = args.join(" ");
  if (!query) return api.sendMessage("put text/query", threadID, messageID);

  let path = __dirname + `/cache/poli.png`;
  const poli = (await axios.get(`https://image.pollinations.ai/prompt/${query}`, {
    responseType: "arraybuffer",
  })).data;

  fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
  api.sendMessage({
    body: "𝐒𝐮𝐜𝐜𝐞𝐬𝐟𝐮𝐥 𝐅𝐨𝐫 𝐘𝐨𝐮𝐫 𝐂𝐫𝐞𝐚𝐭𝐞 𝐈𝐦𝐠✨🌺",
    attachment: fs.createReadStream(path)
  }, threadID, () => fs.unlinkSync(path), messageID);
};
    
