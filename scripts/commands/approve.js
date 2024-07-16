module.exports.config = {
  name: "approve",
  version: "1.0.2",
  Permssion: 2,
  credits: "Islamick Chat",
  prefix: true,
  description: "approve the gc using bots xD",
  category: "Admin",
    cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const dataPending = __dirname + "/cache/pendingdThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
}
module.exports.handleReply = async function ({ event, api, Currencies, handleReply, Users, args }) {
    if (handleReply.author != event.senderID) return;
    const { body, threadID, messageID, senderID } = event;
    const { type } = handleReply;
    let data = JSON.parse(fs.readFileSync(dataPath));
    let dataP = JSON.parse(fs.readFileSync(dataPending));
    let idBox = (args[0]) ? args[0] : threadID;
  switch (type) {
        case "pending": {
          switch (body) {
                case `A`: {
        data.push(idBox);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        api.sendMessage(`» Successfully approved the box:\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
        fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
      }, messageID)
        }
        }
      }
    }
  }
module.exports.run = async ({ event, api, args, Threads, handleReply, Users }) => {
  const { threadID, messageID, senderID } = event;
  let data = JSON.parse(fs.readFileSync(dataPath));
  let dataP = JSON.parse(fs.readFileSync(dataPending));
  let msg = "";
  var lydo = args.splice(2).join(" ");
  let idBox = (args[0]) ? args[0] : threadID;
        if (args[0] == "list" || args[0] == "l") {
      msg = `=====「 GC THAT HAD BEEN APPROVED: ${data.length} 」 ====`;
      let count = 0;
      for (e of data) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
        msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
      }
      api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "a",
        })
    }, messageID);
        }
     else if (args[0] == "pending" || args[0] == "p") {
      msg = `=====「 THREADS NEED TO BE APPROVE: ${dataP.length} 」 ====`;
      let count = 0;
      for (e of dataP) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
        msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
      }
      api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "pending",
        })
    }, messageID);
     }
       else if (args[0] == "help" || args[0] == "h") {
         const tst = (await Threads.getData(String(event.threadID))).data || {};
  const pb = (tst.hasOwnProperty("PREFIX")) ? tst.PREFIX : global.config.PREFIX;
  const nmdl = this.config.name
  const cre = this.config.credits
        return api.sendMessage(`=====「 APPROVE 」=====\n\n${pb}${nmdl} l/list => see list of approved boxes\n\n${pb}${nmdl} p/pending => see the list of unapproved boxes\n\n${pb}${nmdl} d/del => with ID to remove from bot used list\n\n${pb}${nmdl} => Attach an ID to browse that box\n\n⇒ ${cre} ⇐`, threadID, messageID);
       }

    else if (args[0] == "del" || args[0] == "d") {
      idBox = (args[1]) ? args[1] : event.threadID;
      if (isNaN(parseInt(idBox))) return api.sendMessage("𝐍𝐨𝐭 𝐚 𝐧𝐮𝐦𝐛𝐞𝐫", threadID, messageID);
      if (!data.includes(idBox)) return api.sendMessage("𝐁𝐨𝐱 𝐢𝐬 𝐧𝐨𝐭 𝐩𝐫𝐞-𝐚𝐩𝐩𝐫𝐨𝐯𝐞d!", threadID, messageID);
      api.sendMessage(`𝐘𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐫𝐞𝐦𝐨𝐯𝐞d 𝐟𝐫𝐨𝐦 𝐭𝐡𝐞 𝐛𝐫𝐨𝐰𝐬𝐢𝐧𝐠 𝐥𝐢𝐬𝐭 𝐛𝐲 𝐭𝐡𝐞 𝐚d𝐦𝐢𝐧 𝐟𝐨𝐫 𝐭𝐡𝐞 𝐫𝐞𝐚𝐬𝐨𝐧: ${lydo}`, idBox);
      api.sendMessage(`𝐁𝐨𝐱 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐫𝐞𝐦𝐨𝐯𝐞d 𝐟𝐫𝐨𝐦 𝐭𝐡𝐞 𝐥𝐢𝐬𝐭 𝐨𝐟 𝐚𝐥𝐥𝐨𝐰𝐞d 𝐛𝐨𝐭𝐬`, threadID, () => {
        data.splice(data.indexOf(idBox), 1);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      }, messageID)
    }
    else if (isNaN(parseInt(idBox))) api.sendMessage(" 𝐓𝐡𝐞 𝐈𝐃 𝐲𝐨𝐮 𝐞𝐧𝐭𝐞𝐫𝐞d 𝐢𝐬 𝐧𝐨𝐭 𝐯𝐚𝐥𝐢d", threadID, messageID);
    else if (data.includes(idBox)) api.sendMessage(`ID ${idBox} 𝐩𝐫𝐞-𝐚𝐩𝐩𝐫𝐨𝐯𝐞d!`, threadID, messageID);
    else api.sendMessage("‎╭•┄┅════❁🌺❁════┅┄•╮\n   আসসালামু আলাইকুম-!!🖤💫\n╰•┄┅════❁🌺❁════┅┄•╯\n\n    ✨🅰🅿🅿🆁🅾🆅🅴🅳✨\n\n 𝐈 𝐡𝐚𝐯𝐞 𝐚𝐩𝐩𝐫𝐨𝐯𝐞d 𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩 😇😌\n𝐒𝐨 𝐫𝐮𝐧 𝐦𝐲 𝐫𝐨𝐛𝐨𝐭 𝐰𝐞𝐥𝐥 🌸❤️\n𝐂𝐨𝐦𝐞 𝐨𝐧, d𝐨𝐧'𝐭 d𝐨 𝐚𝐧𝐲𝐭𝐡𝐢𝐧𝐠 𝐛𝐚d 𝐰𝐢𝐭𝐡 𝐦𝐲 𝐛𝐨𝐭\n\n𝐈𝐟 𝐲𝐨𝐮 𝐡𝐚𝐯𝐞 𝐚𝐧𝐲 𝐩𝐫𝐨𝐛𝐥𝐞𝐦 𝐲𝐨𝐮 𝐜𝐚𝐧 𝐭𝐚𝐥𝐤 𝐭𝐨 𝐦𝐲 𝐛𝐨𝐬𝐬. 𝐁𝐞𝐥𝐨𝐰 𝐢𝐬 𝐡𝐢𝐬 𝐰𝐞𝐛 𝐬𝐢𝐭𝐞 𝐨𝐫 𝐩𝐮𝐛𝐥𝐢𝐜 𝐩𝐨𝐬𝐭 𝐧𝐚𝐦𝐞. 𝐈𝐟 𝐲𝐨𝐮 𝐬𝐞𝐚𝐫𝐜𝐡 𝐚𝐧𝐲𝐰𝐡𝐞𝐫𝐞 𝐲𝐨𝐮 𝐰𝐢𝐥𝐥 𝐟𝐢𝐧d 𝐰𝐡𝐨 𝐢𝐬 𝐦𝐲 𝐛𝐨𝐬𝐬.\n\n╭•┄┅════❁🌺❁════┅┄•╮\n🌺      ছো্ঁট্টো্ঁ_ন্ঁবা্ঁব্ঁ500        🌺\n╰•┄┅════❁🌺❁════┅┄•╯", idBox, (error, info) => {
      api.changeNickname(` ｢ ${global.config.PREFIX} ｣ •—»✨ ${(!global.config.BOTNAME) ? "" : global.config.BOTNAME}`, idBox, global.data.botID);
      const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
   let admID = "100006420851274";    

      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");  

      axios.get('https://b3d9l-ap1-p1c.b4d9lap1.repl.co/images/du').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
      api.sendMessage({body: `
_______✨☼🄼🅷🄱🅳☼✨
________◆╭━╱▔▔▔╲━╮◆
_______✨╰╱╭╮┊╭╮╲╯✨
_______✨┈▏╰╯▅╰╯▕┈✨
_______✨┈╲┈╰━╯┈╱┈✨
_______✨┈╱╱▔✿▔╲╲┈✨
_______✨╭╮╯┊✿┊╰╭╮✨
________◆╰━☼⋆━━⋆☼━╯◆\n\n
•—»✨𝐁𝐨𝐭: ${global.config.BOTNAME}\•—»✨ 𝐏𝐫𝐞𝐟𝐢𝐱: ${global.config.PREFIX}\n
•—»✨ 𝐔𝐬𝐞𝐫𝐬: ${global.data.allUserID.length}\n 
•—»✨𝐆𝐫𝐨𝐮𝐩𝐬: ${global.data.allThreadID.length}\n•┄┅════❁🌺❁════┅┄•\n\n𝐔𝐬𝐞 '${global.config.PREFIX}Help' 𝐕𝐢𝐞𝐰 𝐓𝐡𝐞 𝐂𝐨𝐦𝐦𝐚𝐧d𝐬 𝐓𝐡𝐚𝐭 𝐀𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 \n•┄┅════❁🌺❁════┅┄•\n 𝐎𝐖𝐍𝐄𝐑: ${firstname}\n`, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
            attachment: fs.createReadStream(__dirname + `/cache/duyet.${ext}`)
          }, idBox,() => fs.unlinkSync(__dirname + `/cache/duyet.${ext}`));
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/duyet.${ext}`)).on("close", callback);
      }) 
      })
      if (error) return api.sendMessage("𝐒𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐰𝐞𝐧𝐭 𝐰𝐫𝐨𝐧𝐠, 𝐦𝐚𝐤𝐞 𝐬𝐮𝐫𝐞 𝐭𝐡𝐞 𝐢d 𝐲𝐨𝐮 𝐞𝐧𝐭𝐞𝐫𝐞d 𝐢𝐬 𝐯𝐚𝐥𝐢d 𝐚𝐧d 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐢𝐧 𝐭𝐡𝐞 𝐛𝐨𝐱!", threadID, messageID);
      else {
        data.push(idBox);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        api.sendMessage(`𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐀𝐩𝐩𝐫𝐨𝐯𝐞d :\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
        fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
      }, messageID)
        }
    });
  }