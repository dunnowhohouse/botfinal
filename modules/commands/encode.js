module.exports.config = {
    name: "encode",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DVB",
    description: "Mã hóa url",
    commandCategory: "Công cụ",
    usages: "[Url cần mã hóa]",
    cooldowns: 5,
    dependencies: {
        "request":"",
        "fs":""
    }
};

module.exports.run = function({ api, event, args }) {

  	if (args[0] == "name") {
  
    let textNeedSearch = "";
    const regex = /(https?:\/\/.*?\.(?:png|jpe?g|gif)(?:\?(?:[\w_-]+=[\w_-]+)(?:&[\w_-]+=[\w_-]+)*)?(.*))($)/;
    (event.type == "message_reply") ? textNeedSearch = event.messageReply.attachments[0].url: textNeedSearch = args.join(" ");
  
    (regex.test(textNeedSearch)) ? api.sendMessage(`${textNeedSearch}`, event.threadID, event.messageID): 
      
      api.sendMessage(`${encodeURIComponent(textNeedSearch)}`, event.threadID, event.messageID);
};






}  