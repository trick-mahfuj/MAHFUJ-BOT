const axios = require("axios");
const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json`,
  );
  return base.data.api;
};

(module.exports.config = {
  name: "imgur2",
  version: "6.9",
  credits: "dipto",
  countDown: 5,
  hasPermssion: 0,
  prefix:true,
  commandCategory: "media",
  category: " media",
  description: "convert image/video into Imgur link",
  usages: "reply [image, video]",
}),
  (module.exports.run = async function ({ api, event }) {
    const dip = event.messageReply?.attachments[0]?.url;
    if (!dip) {
      return api.sendMessage(
        "Please reply to an image or video.",
        event.threadID,
        event.messageID,
      );
    }
    try {
      const res = await axios.get(
        `${await baseApiUrl()}/imgur?url=${encodeURIComponent(dip)}`,
      );
      const dipto = res.data.uploaded.image;
      api.sendMessage(dipto, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      return api.sendMessage(
        "Failed to convert image or video into link.",
        event.threadID,
        event.messageID,
      );
    }
  });
