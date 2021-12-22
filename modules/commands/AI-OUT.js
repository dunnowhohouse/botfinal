const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "AI-OUT",
  version: "1.0.2",
  hasPermssion: 1,
  credits: "Nhiều Người - BằngVIP",
  description: "AI.js",
  commandCategory: "Tự động",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

////////////////////////////////////// AI ///////////////////////////////////////
  if ((event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  
////////////////////////////////////// AI ///////////////////////////////////////


}

module.exports.run = function({ api, event, client, __GLOBAL }) { }