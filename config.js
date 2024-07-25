//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94776290170";
global.owner = process.env.OWNER_NUMBER || "94776290170";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtweWxNb3BxelVVYzhkNllLNzhNVVdxU3ZDb2swNm5vTW00djR3MWpraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhGeEM1NUI2R0lTUmQ0U083OUJhRXlYSFcvaXViVktRdEZ3Z2g3L0N3QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSk12R0ptNDBJeU9iWXI2ckg0bDlmQkhHUjdpYWViTEg2emxIWjk5UUVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2bElObzBDYllFVlExRHgrNnNaM09INEdSQVlyVXlpeWdIVm02QXRoOWhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVQNm1mODE2M0Jrakc1aW5mQ1BtVmtNT3o3SHM5ZTh5dFAxZlcvL2xpa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitNdGJUMjNKMW1GN0lTVzdjQUM4MlJ5aU1vanUwSnJRSmRHS1VzMmMxa2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0QvUnZ0RytucG9SKzIrc3FjTzArVXJFSU9SdVFNQXpReE1WN2VzWGhWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHI0NFpEYTZ3QmFyRlJ6SWt6emt1cnNLNSs4ZWdQaWhVbkt4OWY1NXBEdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl1QlB3bmRlSDVaVTN5VE94ZFo3ek11ZjAxaTQvMVdMMWlOdFd3eWRLaFRJYkFxbXlQRjh0ZTRERm9mVDNDRzRDM01FVzE3dDdmakowV3A1aGFMbmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiI0Rjk5ZVJuSU9mR1djVGVQQ21yT1V1RVQwVTJUTno5d2tGdXArR0lpeHhjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNdnF0WGFiUVFNS2YxYTVzN3NQU0lBIiwicGhvbmVJZCI6ImZiZGY4ODRmLTU0ZjMtNDg2Ny04MzZlLTIzMWUyNTgzYTc2YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrN3FZbExUQTQ2L1UwWWpJNTdVd3Zsb2NwVHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS29Ga1g4QmltZTlYblFRSHcwSGJkNTJWSjM4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRNMUpSR0RQIiwibWUiOnsiaWQiOiI5NDc3NjI5MDE3MDo0N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiI5NDc3NjI5MDE3MCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnlKOHU4R0VJanhpTFVHR0E4Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZXJYOFhzMS9kVE9VeXB2YzVsU3RtSXprYzBsMXZwQnRYODk2M3E3UTdTOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSzU5cVB3QWp4RHNQTXA2cSszaGFEa3JpTW92N0JvZlJVUUpuRzNMdVlmMi8yUWZBUVZxdS9JOVFMNTlYMUtSYUIwREY5UUU3dDkwcWxWZDRXWUl5Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6Ilg4U3E2MkVZYTZYdGJnZUJSblZrNFZ3OTJRMWZmcW01eUQ2Z20vMXZra1JKZWdTWU10d0hqckJQQkllalNYVWZpTFEwTUZYcW91T0JjdWVQaE55N2h3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzYyOTAxNzA6NDdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHExL0Y3TmYzVXpsTXFiM09aVXJaaU01SE5KZGI2UWJWL1BldDZ1ME8wdiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTkwNzM0OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDK3QifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "SP MD 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "SP-MD",
  ownername: process.env.OWNER_NAME || "SP TEAM,
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
