module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "BằngVIP - Dựa trên demo của manhIT",
	description: "Tắt Bot",
	commandCategory: "Hệ thống",
	cooldowns: 0
        };
        
module.exports.run = async({event, api}) =>{
api.sendMessage("Bye! hẹn gặp lại",event.threadID, () =>process.exit(0))}