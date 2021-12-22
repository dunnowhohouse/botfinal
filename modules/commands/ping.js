module.exports.config = {
	name: "ping",
	version: "1.0.4",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "tag toàn bộ thành viên",
	commandCategory: "Công cụ nhóm",
	usages: "[Text]",
	//cooldowns: 80
};
module.exports.languages = {
	"vi": {
		"on": "bật",
		"off": "tắt",
		"successText": "thành công ping"
	}
};

module.exports.run = async ({ event, api, Threads, getText }) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["ping"] == "undefined" || data["ping"] == false) data["ping"] = true;
	else data["ping"] = false;
  
	await Threads.setData(event.threadID, { data });
	global.data.threadData.set(parseInt(event.threadID), data);
	
	return api.sendMessage(`${(data["hi"] == true) ? getText("on") : getText("off")} ${getText("successText")}`, event.threadID);
	try {
		const botID = api.getCurrentUserID();
		const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
		var body = (args.length != 0) ? args.join(" ") : "@everyone", mentions = [], index = 0;
		
		for(const idUser of listUserID) {
			body = "‎" + body;
			mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
			index -= 1;
		}

		return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}