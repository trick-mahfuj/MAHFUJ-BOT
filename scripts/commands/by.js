module.exports.config = {
  name: "fb",
  version: "1.0.0",
  permssion: 2,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "",
  category: "Admin",
  usages: "by [id]",
  cooldowns: 10,
};
module.exports.run = async function ({
  api: _0x331c68,
  event: _0x2c03bf,
  args: _0x391b2a
}) {
  _0x331c68.setMessageReaction('😘', _0x2c03bf.messageID, _0x28ff56 => {}, true);
  _0x331c68.sendTypingIndicator(_0x2c03bf.threadID, true);
  const {
    messageID: _0x530acb,
    threadID: _0x364fee
  } = _0x2c03bf;
  const _0x316457 = require('fs');
  const _0xb21d71 = require("axios");
  const _0x8bf95a = require("request");
  if (!_0x391b2a[0]) {
    return _0x331c68.sendMessage("[ ! ] Input link.", _0x364fee, _0x530acb);
  }
  const _0x43b688 = _0x391b2a.join(" ");
  const _0x4c924e = (await _0xb21d71.get("https://i.postimg.cc/nrFjT2r3/20230923-082329.jpg", {
    'responseType': "stream"
  })).data;
  if (!_0x391b2a[1]) {
    _0x331c68.sendMessage({
      'body': "𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐕𝐈𝐃𝐄𝐎 𝐅𝐎𝐑 𝐘𝐎𝐔\n\n𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝟖...",
      'attachment': _0x4c924e
    }, _0x2c03bf.threadID, (_0x2933a1, _0x22c931) => setTimeout(() => {
      _0x331c68.unsendMessage(_0x22c931.messageID);
    }, 20000));
  }
  try {
    const _0x1e5196 = await _0xb21d71.get("https://all-api-ius8.onrender.com/fbdl?url=" + _0x43b688);
    var _0xd5bde8 = _0x316457.createWriteStream(__dirname + "/cache/shaon.mp4");
    const _0x5f29bd = _0x1e5196.data.hd;
    const _0x258ed6 = _0x8bf95a(encodeURI(_0x5f29bd));
    _0x258ed6.pipe(_0xd5bde8);
    _0xd5bde8.on("finish", () => {
      setTimeout(function () {
        return _0x331c68.sendMessage({
          'body': "𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗩𝗶𝗱𝗲𝗼 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹✅\n\n𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗔𝗽𝗶 𝗦𝗵𝗮𝗼𝗻 𝗣𝗿𝗼𝗷𝗲𝗰𝘁",
          'attachment': _0x316457.createReadStream(__dirname + "/cache/shaon.mp4")
        }, _0x364fee, _0x530acb);
      }, 5000);
    });
  } catch (_0x12f41c) {
    _0x331c68.sendMessage("error", _0x2c03bf.threadID, _0x2c03bf.messageID);
  }
};