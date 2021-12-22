module.exports.config = {
    name: 'givefile',
    version: '2.1.0',
    hasPermssion: 2,
    credits: 'BằngVIP',
    /** Dựa trên givefile của NTKhang! */
    description: '',
    commandCategory: 'Hệ thống',
    usages: 'givefile',
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};
module.exports.run = async({
    args,
    api,
    event
}) => {
    const fs = global.nodemodule["fs-extra"];
 
    var path = [],
        pathrn = [],
        pathrntxt = [];
    var msg = '';
    var notfound = "";
    for (let file of args) {
        if (!fs.existsSync(__dirname + "/" + file)) {
            notfound += 'Bạn lú rồi làm J có file: ' + file;
            continue;
        };
        if (file.endsWith('.js')) {
            fs.copyFile(__dirname + '/' + file, __dirname + '/' + file.replace(".js", ".txt"));
            pathrn.push(
                fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
            );
            pathrntxt.push(file.replace('.js', '.txt'));
        } else {
            path.push(fs.createReadStream(__dirname + '/' + file));
        }
    }
    var mainpath = [...path, ...pathrn];
    if (pathrn.length != 0)
        msg += 'Alo cậu chủ. File của cậu chủ đây';
  api.sendMessage({ body: msg + "\n" + notfound ,attachment: mainpath}, event.messageReply.senderID)
    { return api.sendMessage("Đã gửi!", event.threadID)};
    pathrntxt.forEach(file => {
        if (fs.existsSync(__dirname + '/' + file)) fs.unlinkSync(__dirname + '/' + file);
    });
};