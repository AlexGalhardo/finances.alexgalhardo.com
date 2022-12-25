// https://api.telegram.org/bot<telegram_token_here>/getUpdates
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _https = /*#__PURE__*/ _interopRequireDefault(require("https"));
const _dateTime = /*#__PURE__*/ _interopRequireDefault(require("./DateTime"));
require("dotenv/config");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TelegramBOTLogger {
    isThereToken(token) {
        if (!token) throw new Error("There is no Telegram Token in TelegramLogger Class Constructor");
    }
    isThereChannel(channel) {
        if (!channel) throw new Error("There is no Telegram Channel name in TelegramLogger Class Constructor");
    }
    sendMessage(type, message) {
        const logMessage = `${type} \n\n <b>CREATED_AT:</b> ${_dateTime.default.getNow()}\n ${message}`;
        const urlParams = encodeURI(`chat_id=${this.channelName}&text=${logMessage}&parse_mode=HTML`);
        const url = `${this.baseUrl}/sendMessage?${urlParams}`;
        this.sendRequest(url);
    }
    logNewTransaction(id, created_at, type, category, description, total) {
        const log = `
			<b>Transaction ID:</b> ${id}
			<b>Created At:</b> ${created_at}
			<b>Type:</b> ${type}
			<b>Category:</b> ${category}
			<b>Description:</b> ${description}
			<b>Total:</b> ${total}
        `;
        const logMessage = `New Transaction \n\n <b>CREATED_AT:</b> ${_dateTime.default.getNow()}\n ${log}`;
        const urlParams = encodeURI(`chat_id=${this.channelName}&text=${logMessage}&parse_mode=HTML`);
        const url = `${this.baseUrl}/sendMessage?${urlParams}`;
        this.sendRequest(url);
    }
    sendRequest(url) {
        return _https.default.get(url, (res)=>{
            const { statusCode  } = res;
            if (statusCode !== 200) {
                let data;
                res.on("data", (chunk)=>{
                    data += chunk;
                });
                res.on("end", ()=>{
                    console.log(data);
                });
            }
        }).on("error", (e)=>{
            console.log(e);
        });
    }
    constructor(token, channelName){
        this.isThereToken(token);
        this.isThereChannel(channelName);
        this.token = token;
        this.channelName = channelName;
        this.baseUrl = `https://api.telegram.org/bot${token}`;
    }
}
const _default = new TelegramBOTLogger(process.env.TELEGRAM_BOT_HTTP_TOKEN, process.env.TELEGRAM_BOT_CHANNEL_ID);
