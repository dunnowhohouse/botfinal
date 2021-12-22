module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Khởi động lại Bot",
	commandCategory: "Hệ thống",
	usages: "",
	cooldowns: 5
};


module.exports.run = async ({ api, event, args }) => {

	const { threadID, messageID } = event;
	return api.sendMessage(`Đã yêu cầu hệ thống khởi động lại!`, threadID, () => process.exit(1));
}