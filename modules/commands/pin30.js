const API = "https://api-ttk.herokuapp.com/social/pinterest2?text="
module.exports.config = {
  name: "pin2",
  version: "1.1.1",
  hasPermssion: 0,
  credits: "DVB",
  description: "Tìm kiếm kết quả trên pinterest! Phiên bản 1 ảnh",
  commandCategory: "Đa phương tiện",
  usages: "[Từ khóa]",
  cooldowns: 5,
  dependencies: {"fs-extra": "","axios": ""}
};

exports.run = async function ({ event, api, args, data }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    let khongcotukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    if (!khongcotukhoa) return api.sendMessage("Không có từ khóa thì tìm kiếm bằng niềm tin à ?", event.threadID, event.messageID);
//Ro bản này api không cần encode lên sẽ bỏ endcode
    var body = (await axios.get(`${API}${tukhoa}`)).data;
  

  
var anh = body.data;
var val = body.data;
  for (let i = 0; i < anh.length; i++) {
    if (anh[i] > val) {
      val = anh[i];
    }
  };

   console.log(anh[2]);
   console.log(anh[3]);
   console.log(anh[4]);
   console.log(anh[5]);
   console.log(anh[6]);
   console.log(anh[7]);
   console.log(anh[8]);
   console.log(anh[9]);
   console.log(anh[10]);
   console.log(anh[11]);
   console.log(anh[12]);
   console.log(anh[13]);
   console.log(anh[14]);
   console.log(anh[15]);
   console.log(anh[16]);
   console.log(anh[17]);
   console.log(anh[18]);
   console.log(anh[19]);
   console.log(anh[20]);
   console.log(anh[21]);
   console.log(anh[22]);
   console.log(anh[23]);
   console.log(anh[24]);
   console.log(anh[25]);
   console.log(anh[26]);
   console.log(anh[27]);
   console.log(anh[28]);
   console.log(anh[29]);
   console.log(anh[30]);
  //  var url = body.data
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
    var getimg7 = (await axios.get(anh[7], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh7.png`, Buffer.from(getimg7, "utf-8")); 
    var getimg8 = (await axios.get(anh[8], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh8.png`, Buffer.from(getimg8, "utf-8")); 
    var getimg9 = (await axios.get(anh[9], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh9.png`, Buffer.from(getimg9, "utf-8")); 
    var getimg10 = (await axios.get(anh[10], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh10.png`, Buffer.from(getimg10, "utf-8")); 
    var getimg11 = (await axios.get(anh[11], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh11.png`, Buffer.from(getimg11, "utf-8")); 
    var getimg12 = (await axios.get(anh[12], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh12.png`, Buffer.from(getimg12, "utf-8")); 
    var getimg13 = (await axios.get(anh[13], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh13.png`, Buffer.from(getimg13, "utf-8")); 
    var getimg14 = (await axios.get(anh[14], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh14.png`, Buffer.from(getimg14, "utf-8")); 
    var getimg15 = (await axios.get(anh[15], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh15.png`, Buffer.from(getimg15, "utf-8")); 
    var getimg16 = (await axios.get(anh[16], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh16.png`, Buffer.from(getimg16, "utf-8")); 
    var getimg17 = (await axios.get(anh[17], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh17.png`, Buffer.from(getimg17, "utf-8")); 
    var getimg18 = (await axios.get(anh[18], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh18.png`, Buffer.from(getimg18, "utf-8")); 
    var getimg19 = (await axios.get(anh[19], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh19.png`, Buffer.from(getimg19, "utf-8")); 
    var getimg20 = (await axios.get(anh[20], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh20.png`, Buffer.from(getimg20, "utf-8")); 
    var getimg21 = (await axios.get(anh[21], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh21.png`, Buffer.from(getimg21, "utf-8")); 
    var getimg22 = (await axios.get(anh[22], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh22.png`, Buffer.from(getimg22, "utf-8")); 
    var getimg23 = (await axios.get(anh[23], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh23.png`, Buffer.from(getimg23, "utf-8")); 
    var getimg24 = (await axios.get(anh[24], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh24.png`, Buffer.from(getimg24, "utf-8")); 
    var getimg25 = (await axios.get(anh[25], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh25.png`, Buffer.from(getimg25, "utf-8")); 
    var getimg26 = (await axios.get(anh[26], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh26.png`, Buffer.from(getimg26, "utf-8")); 
    var getimg27 = (await axios.get(anh[27], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh27.png`, Buffer.from(getimg27, "utf-8")); 
    var getimg28 = (await axios.get(anh[28], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh28.png`, Buffer.from(getimg28, "utf-8")); 
    var getimg29 = (await axios.get(anh[29], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh29.png`, Buffer.from(getimg29, "utf-8")); 
    var getimg30 = (await axios.get(anh[30], {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/pinterest/anh30.png`, Buffer.from(getimg30, "utf-8")); 

  
  
    upimg = [];
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh1.png`));      
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh2.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh3.png`)); 
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh4.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh5.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh6.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh7.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh8.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh9.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh10.png`));      
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh11.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh12.png`)); 
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh13.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh14.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh15.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh16.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh17.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh18.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh19.png`));      
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh20.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh21.png`)); 
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh22.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh23.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh24.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh25.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh25.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh27.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh28.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh29.png`));
        upimg.push(fs.createReadStream(__dirname + `/cache/pinterest/anh30.png`));
  
  

  
    api.sendMessage({body: `Kết quả cho ${tukhoa}`,attachment: upimg}, event.threadID
               //   , () => fs.unlinkSync(__dirname + `/cache/pinterest`)
  , event.messageID);
    
}