/** THIS FULL BOT COMMAND FILE AND ALL API CREATE BY ISLAMICK CYBET CHAT DONT CHINGE THE MY ANY CODE 🤙🖤📿 **/
module.exports.config = {
  name: "islam",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber chat",
  prefix : true,
  description: "Islamick post rendom",
  category: "𝐈 𝐂 𝐂",
  usages: "ig",
  cooldowns: 11,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["ღ࿐– যখন বান্দার জ্বর হয়,😇\n🖤তখন গুনাহ গুলো ঝড়ে পড়তে থাকে☺️\n– হযরত মুহাম্মদ(সাঃ)●───༊༆",
             "┏━━━━ ﷽ ━━━━┓\n 🖤﷽স্মার্ট নয় ইসলামিক ﷽🥰\n 🖤﷽ জীবন সঙ্গি খুঁজুন ﷽🥰\n┗━━━━ ﷽ ━━━━┛",
             "┏━━━━ ﷽ ━━━━┓\n 🖤﷽সুন্দর চেহারা নয় ﷽🥰\n 🖤﷽ সুন্দর মন খুজুন ﷽🥰\n┗━━━━ ﷽ ━━━━┛",
             "___ নারী তুমি নিজেকে এমন ভাবে তৈরি করো.!\n︵❝།།💚🌺ღ᭄︵❝།།💚🌺ღ᭄\n ------যাতে যেকোন পুরুষ তোমাকে পেয়ে..!🖤\n︵❝།།💚🌺ღ᭄︵❝།།💚🌺ღ᭄\n---বার বার রবের কাছে শুকরিয়া আদায় করে!🌺🌺︵❂✿༎༅⸙͎⸙͎\n︵❝།།💚🌺ღ᭄︵❝།།💚🌺ღ᭄\n#আলহামদুলিল্লাহ 🥰🌺🖤𝄞⋆⃝𝄞⋆⃝༅༎༅❍",
             "- ইসলাম অহংকার করতে শেখায় না!🌸\n\n- ইসলাম শুকরিয়া আদায় করতে শেখায়!🤲🕋🥀",
             "❥︎-----★ ভাগ্য !! কাকে !! বলে !! জানেন  !! 🖤🌻 \n🦋  পৃথিবীতে !! 4200 !! হাজার !! ধর্ম !! আছে  !!🥰\n❥︎-----★ তার !! মধ‍‍্যে !! আমি !! এবং !! আপনি !! মুসলিম  !! 💚🌻\n★-----🦋  আলহামদুলিল্লাহ্  🦋-----★",
             "┏━━━━ ﷽ ━━━━┓\n 🖤﷽স্মার্ট নয় ইসলামিক ﷽🥰\n 🖤﷽ জীবন সঙ্গি খুঁজুন ﷽🥰\n┗━━━━ ﷽ ━━━━┛",
             "ღ࿐– যখন বান্দার জ্বর হয়,😇\n🖤তখন গুনাহ গুলো ঝড়ে পড়তে থাকে☺️\n– হযরত মুহাম্মদ(সাঃ)●───༊༆",
             "~🍂🦋\n              ━𝐇𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐈𝐬 𝐄𝐧𝐣𝐨𝐲𝐢𝐧𝐠 𝐓𝐡𝐞 𝐋𝐢𝐭𝐭𝐥𝐞\n                          ━𝐓𝐡𝐢𝐧𝐠𝐬 𝐈𝐧 𝐋𝐢𝐟𝐞..♡🌸\n           ━𝐀𝐥𝐡𝐚𝐦𝐝𝐮𝐥𝐢𝐥𝐥𝐚𝐡 𝐅𝐨𝐫 𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠...💗🥰",
             "•___💜🌈___•\n°___:))-তুমি আসক্ত হও-||-🖤🌸✨\n°___:))-তবে নেশায় নয় আল্লাহর ইবাদতে-||-🖤🌸✨\n•___🍒🖇️✨___•",
             "─❝হাসতে❜❜ হাসতে❜❜ একদিন❜❜😊😊\n ━❥❝সবাইকে❜❜ ─❝কাদিয়ে ❜❜বিদায়❜❜ নিবো❜❞.!!🙂💔🥀 ",
             "🦋🥀࿐\nლ_༎হাজারো༎স্বপ্নের༎শেষ༎স্থান༎••༊🙂🤲🥀\n♡_༎কবরস্থান༎_♡❤\n🦋🥀࿐",
             "•\n\nপ্রসঙ্গ যখন ধর্ম নিয়ে•🥰😊\nতখন আমাদের ইসলামই সেরা•❤️\n𝐀𝐥𝐡𝐚𝐦𝐝𝐮𝐥i𝐥𝐥𝐚🌸❤️",
             "❥︎-----★ ভাগ্য !! কাকে !! বলে !! জানেন  !! 🖤🌻 \n🦋  পৃথিবীতে !! 4200 !! হাজার !! ধর্ম !! আছে  !!🥰\n❥︎-----★ তার !! মধ‍‍্যে !! আমি !! এবং !! আপনি !! মুসলিম  !! 💚🌻\n★-----🦋  আলহামদুলিল্লাহ্  🦋-----★",
"💚🌻\n- নিজেকে কখনো অসুন্দর মনে করবেন না।\n- কারণ আল্লাহর সৃষ্টি কখনো\nঅসুন্দর হয় না। 🙂🥀🖤",
"I Wish😍\nআমি ও একদিন হজ্জ করবো,,\nনবীজির রোওজা দেখবো-\nইনশাআল্লাহ",
"- ইসলাম অহংকার করতে শেখায় না!🌸\n- ইসলাম শুকরিয়া আদায় করতে শেখায়!🤲🕋🥀",
"- মোনাজাত শেষে একটাই চাওয়া,\n- ভালো থাকুক পৃথিবীর সকল বাবা মা!\n-আমিন!❤️",
"༆❝শুকরিয়া আদায় করতে শিখুন❞🥰🥰࿐\nღ🌺༆❝আল্লাহ একদিন\nশ্রেষ্ঠ জিনিস টাই দিবেন...💞\n༎༊❞ইনশাআল্লাহ❝༎༊",
"🌻🥀আল্লাহ যেমন রাতের পরে দিন আনেন তেমনি 🌻🥀\nদুঃখের পরে সুখ দিবেন ইনশাআল্লাহ",
"⌢║🌼🖤\n⏤ সৌন্দর্যের আলাদা কোনো রং নেই\nআল্লাহর সৃষ্টি সব কিছুই সুন্দর.!!🖤\n🍁🌼",
"🦋🥀࿐\nლ_༎হাজারো༎স্বপ্নের༎শেষ༎স্থান༎••༊🙂🤲🥀\n♡_༎কবরস্থান༎_❤\n🦋🥀࿐",
"彡🌸\n যার চরিত্র যেমন, তার জীবন সাথীও হবে তেমন🌿\n [📖সূরা নূর- ২৬💛]༒",
"__একদিন সব ইচ্ছা পূর্ণতা পাবে ! 🖤🥀\n𝐈𝐧 𝐒𝐚𝐡 𝐀𝐥𝐥𝐚𝐡____☺️🌺",
             ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/g0dpYGm.mp4",
"https://drive.google.com/uc?id=1my0Qs9K60k3V0pb3AVZ1P-IE9Nhx4NOm",
"https://drive.google.com/uc?id=1mvRxV8PgSg4ja10BVPpGx7dU-cYc3vB",
"https://drive.google.com/uc?id=1mzkKdGjYXd3xFTQmLK7_Q87bf9Lu4235",
"https://drive.google.com/uc?id=1msyXgtT8SlcGHwjAm3cQlKiAssEO-AgI",
"https://drive.google.com/uc?id=1my6LKsQYTpYlpV48NI8_CJAxdhIkB612",
"https://drive.google.com/uc?id=1mwVWobITdE3n3bvAIsEA6Av4m7FI2RXI",
"https://drive.google.com/uc?id=1njNi0cZihkVPnaUN-IMNy_Bqp0LGGJr3",
    "https://drive.google.com/uc?id=1ndfpIGqFVlhJaOt0YLb5aD477Ao8RTPO",
    "https://drive.google.com/uc?id=1o7gw3LC9SClHAQEYjcIQzuTo4HuMzhVU",
    "https://drive.google.com/uc?id=1novub6pctKDRQzNrONlKO12E4kJi0_SK",
    "https://drive.google.com/uc?id=1oLYie5Q9dACgh1I0dZYASETTPHzGmkDe",
    "https://drive.google.com/uc?id=1oQIaAteLYBKNYTMTzgizcQ0j0V2IW6dn",
    "https://drive.google.com/uc?id=1oEIijjagXPuseOUhowVEKYFY4b-cIEe5",
    "https://drive.google.com/uc?id=1nZgPPiyWaR8VNDFNAoTOICEe-Au-UjlT",
    "https://drive.google.com/uc?id=1oIC8hQVSwcqL469uaitN_s1XP4fsJI5-",
    "https://drive.google.com/uc?id=1nnCXYpIgK-GGX3EelI8nWfgrr5pcc2TN",
    "https://drive.google.com/uc?id=1n_ApTsr14g2iKosx36xFCZvdKcxba4HA",
    "https://drive.google.com/uc?id=1oLYhGejAHabjtPk3RiHN3oe8gr1dS84l",
    "https://drive.google.com/uc?id=1nHpcqR4jrSr3z_TcDWQzXbOYAdLg681V",
    "https://drive.google.com/uc?id=1oAG6FjJaFH9PRLWutkglKV3btu7HSKlI",
    "https://drive.google.com/uc?id=1n_k_7gQ3PK1BsbZxcoQjidZNQ0ZYI85U",
    "https://drive.google.com/uc?id=1o-ZYsCbRI87pp1G1jbyKGmH8C8LO22te",
    "https://drive.google.com/uc?id=1oF6a8ind780UoiHL1GM5EsObiEhne987",
    "https://drive.google.com/uc?id=1nU6dbb_P-zt8ZLZQllGba_m3j297NS5P",
    "https://drive.google.com/uc?id=1nm-q11JeWBgFZ-12HpgGtxbdlc7709rT",
    "https://drive.google.com/uc?id=1ngb_I7yE_TrR4sp45ECQO1bqMTga681V",
    "https://drive.google.com/uc?id=1o6rGQK704pgdxW2J9MCIooaKAtJy8qXF",

];
   var callback = () => api.sendMessage({body:`『 ${know} 』 \n\n🍂𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 : 𝚂𝙷𝙰𝙾𝙽 𝙰𝙷𝙼𝙴𝙳...🌸`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
