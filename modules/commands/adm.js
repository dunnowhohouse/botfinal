/** Mod lại module "bot.js" nếu muốn nó hiển thị ảnh **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/

module.exports.config = {
	name: "adm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "BằngVIP",
	description: "Thông tin người điều hành bot",
	commandCategory: "Hệ thống",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`
Thông tin người điều hành bot:

👑 Tên: Đàm Văn Bằng

👑 Chiều cao: 1m61

👑 Cân nặng: 52Kg

👑 Thường trú: Xuân Dục, Yên Thường, Gia Lâm, Hà Nội, Việt Nam, Trái đất

👑 Giới tính: Men, Gất Men, Mạnh Mẽ 😼😼

👑 Mối quan hệ: Iu Trang

👑 Link Facebook: fb.com/bang206
`, event.threadID, event.messageID);