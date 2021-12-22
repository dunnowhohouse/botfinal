//Modules được code bởi DVB! Vui lòng tôn trọng bản quyền của tác giả
const API = "https://api-ttk.herokuapp.com/social/pinterest?text="
const nokeyword= "Không có từ khóa thì tìm kiếm bằng niềm tin à ?"

//Modules được code bởi DVB! Vui lòng tôn trọng bản quyền của tác giả
module.exports.config = {
  name: "pinter",
  version: "1.1.0",
  hasPermssion: 2,
  credits: "DVB Idea by Rip05",
  description: "Tìm kiếm kết quả trên pinterest! Phiên bản 1 ảnh",
  commandCategory: "Đa phương tiện",
  usages: "[Từ khóa]",
  cooldowns: 5,
  dependencies: {"fs-extra": "","axios": ""}
};

//Modules được code bởi DVB! Vui lòng tôn trọng bản quyền của tác giả
exports.run = async function ({ event, api, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    if ((this.config.credits) != "DVB Idea by Rip05") { return api.sendMessage("Mau để lại credit là DVB Idea by Rip05 trước khi pay file :)", event.threadID, event.messageID)};
    let khongcotukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    let urlen = encodeURI(tukhoa);
    if (!khongcotukhoa) return api.sendMessage(`${nokeyword}`, event.threadID, event.messageID);


  
               var getlink = (await axios.get(`${API}${encodeURI(urlen)}`)).data;
  
               var data = getlink.url;
               var laydulieu = (await axios.get(data, {responseType: "arraybuffer"})).data;
               fs.writeFileSync(__dirname + `/cache/bangmdl2.png`, Buffer.from(laydulieu, "utf-8"));


  
  
    api.sendMessage({body: `Kết quả cho ${tukhoa}: `,
                     attachment: fs.createReadStream(__dirname + `/cache/bangmdl2.png`),
            
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/bangmdl2.png`), event.messageID);
    console.log(getlink)
}