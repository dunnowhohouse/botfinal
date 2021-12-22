module.exports.config = {
	name: "uptime",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DVB",
	description: "",
	commandCategory: "Hệ thống",
	cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {

	const time = process.uptime(),
		gio  = Math.floor(time / (60 * 60)),
		phut = Math.floor((time % (60 * 60)) / 60),
		giay = Math.floor(time % 60);
    
  /**
   * Cái này nỗi
    if (gio  < 10) {gio  = "0"+gio; }
    if (phut < 10) {phut = "0"+phut;}
    if (giay < 10) {giay = "0"+giay;};
   */ 

	return api.sendMessage("", event.threadID, () => api.sendMessage(`${gio}:${phut}:${giay}`, event.threadID, event.messageID));
}
