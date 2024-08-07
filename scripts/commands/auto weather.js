module.exports.config = {
  name: 'autowather',
  version: '10.02',
  Permssion: 0,
  credits: 'Islamick Cyber Chat',
  prefix:true,
  description: 'Automatically send messages at the set time!',
  category: 'System',
  usages: '[]',
  cooldowns: 3
};
const nam = [{
  timer: '12:00:00 AM',
  message: ['\n{abc}']
},
           {
  timer: '1:30:00 PM',
  message: ['\n{abc}']
},
  {
    timer: '2:00:00 PM',
  message: ['\n{abc}']
},
  {
    timer: '3:00:00 PM',
  message: ['\n{abc}']
},
  {
    timer: '4:00:00 PM',
  message: ['\n{abc}']
},
  {
    timer: '5:00:00 PM',
  message: ['\n{abc}']
},
  {
    timer: '6:00:00 PM',
  message: ['\n{abc}']
},
  {
    timer: '7:00:00 PM',
  message: ['\n{abc}']
},
  {
    timer: '8:00:00 PM',
  message: ['\n{abc}']
},
  {
    timer: '9:00:00 PM',
  message: ['\n{abc}']
},
  {
    timer: '10:00:00 PM',
  message: ['\n{abc}']
},
  {
    timer: '11:00:00 PM',
  message: ['\n{abc}']

}];
module.exports.onLoad = _0x522ee3 => setInterval(async () => {
  if (á = nam.find(_0x4a231c => _0x4a231c.timer == new Date(Date.now() + 25200000).toLocaleString().split(/,/).pop().trim())) {
    const _0x4a0922 = require("axios");
    const _0x17dca3 = process.uptime();
    var _0x45d05c = Math.floor(_0x17dca3 / 3600);
    var _0x4b6906 = Math.floor(_0x17dca3 % 3600 / 60);
    var _0x11372e = Math.floor(_0x17dca3 % 60);
    var _0x4efa80 = á.message[Math.floor(Math.random() * á.message.length)];
    const _0x2f6a18 = await _0x4a0922.get("https://api.popcat.xyz/weather?q=" + encodeURI("Dhaka"));
    var _0x3f09db = "   ╭•┄┅══❁🌺❁══┅┄•╮\n       𝐀𝐔𝐓𝐎 𝐖𝐄𝐀𝐓𝐇𝐄𝐑 \n   ╰•┄┅══❁🌺❁══┅┄•╯\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n｢🚀｣ ᴘɪɴᴇ ɴᴇᴡsᴘᴀᴘᴇʀ ғʀᴏᴍ ᴛʜᴇ sᴛᴀᴛɪᴏɴ ᴜɴɪᴠᴇʀsᴇ ᴀɴᴅʀʀ-!!\n｢⏰｣ ᴀᴛ: " + _0x2f6a18.data[0].current.day + " " + _0x2f6a18.data[0].current.date + "\n｢🌡️｣ ᴛᴇᴍᴘᴇʀᴀᴛᴜʀᴇ: " + _0x2f6a18.data[0].current.temperature + '°' + _0x2f6a18.data[0].location.degreetype + "\n｢📋｣ ᴛɪssᴜᴇ: " + _0x2f6a18.data[0].current.skytext + "\n｢☁️｣ ʜᴜᴍɪᴅɪᴛʏ: " + _0x2f6a18.data[0].current.humidity + "\n｢💨｣ ᴡɪɴᴅ ᴅɪʀᴇᴄᴛɪᴏɴ: " + _0x2f6a18.data[0].current.winddisplay + "\n｢📥｣ ɴᴏᴛᴇᴅ ᴀᴛ ᴛɪᴍᴇ: " + _0x2f6a18.data[0].current.observationtime;
    _0x4efa80 = _0x4efa80.replace(/{abc}/, _0x3f09db);
    _0x4efa80 = _0x4efa80.replace(/{hours}/g, _0x45d05c);
    _0x4efa80 = _0x4efa80.replace(/{minutes}/g, _0x4b6906);
    _0x4efa80 = _0x4efa80.replace(/{seconds}/g, _0x11372e);
    _0x4efa80 = _0x4efa80.replace(/{time}/g, require("moment-timezone").tz("Asia/Dhaka").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await _0x4a0922.get("https://islamick-cyber-chat-api-sagocol333.replit.app/vdtrai")).data.data);
    _0x4efa80 = {
      'body': _0x4efa80,
      'attachment': (await _0x4a0922.get((await _0x4a0922.get("https://all-api-ius8.onrender.com/video/status")).data.data, {
        'responseType': "stream"
      })).data
    };
    global.data.allThreadID.forEach(_0x4eab28 => _0x522ee3.api.sendMessage(_0x4efa80, _0x4eab28));
  }
  ;
}, 1000);
module.exports.run = async _0x4895f9 => {
  try {
    const _0x149433 = global.nodemodule.axios;
    const {
      api: _0x109d7b,
      event: _0x427ddb,
      args: _0x3aebca
    } = _0x4895f9;
    const {
      threadID: _0x2b35d7,
      messageID: _0x49758f
    } = _0x427ddb;
    var _0x53cbbe = _0x3aebca.join(" ");
    if (!_0x53cbbe) {
      return _0x109d7b.sendMessage("Enter the province/city to see the weather", _0x2b35d7);
    }
    const _0x3de302 = await _0x149433.get("https://api.popcat.xyz/weather?q=" + encodeURI(_0x53cbbe));
    const _0x2ce038 = _0x3de302.data[0].forecast;
    var _0x5e039b = "Weather of: " + _0x53cbbe + " in the days";
    for (let _0x117b4f = 0; _0x117b4f < 5; _0x117b4f++) {
      _0x5e039b += "\n" + (_0x117b4f + 1) + "-> " + _0x2ce038[_0x117b4f].day + " " + _0x2ce038[_0x117b4f].date + "\n=>Forecast temperature: from " + _0x2ce038[_0x117b4f].low + " arrive " + _0x2ce038[_0x117b4f].high + "\n=>Describe: " + _0x2ce038[_0x117b4f].skytextday + "\n=>Rain rate: " + _0x2ce038[_0x117b4f].precip + "\n";
    }
    ;
    _0x109d7b.sendMessage(_0x5e039b, _0x2b35d7, _0x49758f);
  } catch (_0x611de4) {
    api.sendMessage('' + _0x611de4, threadID);
  }
};
