const API = "https://api-ttk.herokuapp.com/social/pinterest2?text="
module.exports.config = {
  name: "pin6",
  version: "1.1.1",
  hasPermssion: 0,
  credits: "DVB",
  description: "Tìm kiếm kết quả trên pinterest! Phiên bản 6 ảnh",
  commandCategory: "Đa phương tiện",
  usages: "[Từ khóa]",
  cooldowns: 5,
  dependencies: {"fs-extra": "","axios": ""}
};

exports.run = async function ({ event, api, args, data }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const dirMaterial = __dirname + `/cache/pinterest/`;
    if (!fs.existsSync(dirMaterial + "pinterest")) fs.mkdirSync(dirMaterial, { recursive: true });
    let khongcotukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    if (!khongcotukhoa) return api.sendMessage("Không có từ khóa thì tìm kiếm bằng niềm tin à ?", event.threadID, event.messageID);
//Ro bản này api không cần encode lên sẽ bỏ endcode
    var body = (await axios.get(`${API}${tukhoa}`)).data;
var anh = body.data;
  for (let i = 0; i < anh.length; i++) {
    if (anh[i] > body.data) {
      body.data = anh[i];
    }
  };
    var getimg1 = (await axios.get(anh[1], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh1.png`, Buffer.from(getimg1, "utf-8")); 
    var getimg2 = (await axios.get(anh[2], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh2.png`, Buffer.from(getimg2, "utf-8")); 
    var getimg3 = (await axios.get(anh[3], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh3.png`, Buffer.from(getimg3, "utf-8")); 
    var getimg4 = (await axios.get(anh[4], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh4.png`, Buffer.from(getimg4, "utf-8")); 
    var getimg5 = (await axios.get(anh[5], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh5.png`, Buffer.from(getimg5, "utf-8")); 
    var getimg6 = (await axios.get(anh[6], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh6.png`, Buffer.from(getimg6, "utf-8"));   
    upimg = [];
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh1.png`));    
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh2.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh3.png`)); 
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh4.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh5.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh6.png`));
    api.sendMessage({body: `Kết quả cho ${tukhoa}`,attachment: upimg}, event.threadID
               //   , () => fs.unlinkSync(__dirname + `/cache/pinterest`)
  , event.messageID);
    
}