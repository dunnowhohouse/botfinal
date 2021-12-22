module.exports.config = {name: "hi",version: "1.0.1",hasPermssion: 0,credits: "ManhG",description: "",commandCategory: "Tự động",usages: "",cooldowns: 0,
denpendencies: {"fs-extra": "","request": ""}};

module.exports.handleEvent = async ({event,api,Users}) => {const fs = global.nodemodule["fs-extra"];var {threadID,messageID,body,senderID} = event;const thread = global.data.threadData.get(threadID) || {};if (typeof thread["hi"] !== "undefined" && thread["hi"] == false) return;let name = await Users.getNameUser(event.senderID);if (senderID == api.getCurrentUserID()) return;function out(data) {api.sendMessage(data, threadID, messageID)}
	//trả lời
	var msg = {body: `Chào ${name}, chúc bạn một ngày tốt lành ❤️`,attachment: (await global.nodemodule["axios"]({url: (await global.nodemodule["axios"]('https://apikanna.change-itit.repl.co')).data.data,method: "GET",responseType: "stream"})).data}
	// Gọi bot
	var arr = ["hi", "hello", "lô", "hí lô", "chào"];arr.forEach(i => {let str = i[0].toUpperCase() + i.slice(1);if (body === i.toUpperCase() | body === i | str === body) return out(msg)});};

module.exports.run = async function({ api, event, Threads, getText }) {
    //DVB Nâng cấp lấy tên mdl cho ae khỏi thay từng cái một :>
    const name = this.config.name;
    const { threadID, messageID } = event;
    let data = (await Threads.getData(threadID)).data;
    if (typeof data[`${name}`] == "undefined" || data[`${name}`] == true) 
         data[`${name}`] = false;
    else data[`${name}`] = true;
    await Threads.setData(threadID, { data });
    global.data.threadData.set(threadID, data);
    return api.sendMessage(`${(data[`${name}`] == false) ? "Tắt" : "Bật"} ${name} thành công`, threadID, messageID);
    //DVB Nâng cấp lấy tên mdl cho ae khỏi thay từng cái một :>
}