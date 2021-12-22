module.exports.config = {
	name: "tid",	version: "1.0.0", 
	hasPermssion: 0,
	credits: "NTKhang",
	description: "Lấy ID nhóm", 
	commandCategory: "Công cụ nhóm",
	usages: "tid",
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage(event.threadID, event.threadID);
};
