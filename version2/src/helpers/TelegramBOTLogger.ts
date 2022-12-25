// https://api.telegram.org/bot<telegram_token_here>/getUpdates

import https from "https";

import DateTime from "./DateTime";
import "dotenv/config";

interface INewTransactionParams {
    id: string;
    created_at: string;
    type: string;
    category: string;
    description: string;
    total: string;
}

class TelegramBOTLogger {
    private token: string;
    private channelName: string;
    private baseUrl: string;

    constructor(token: string, channelName: string) {
        this.isThereToken(token);
        this.isThereChannel(channelName);
        this.token = token;
        this.channelName = channelName;
        this.baseUrl = `https://api.telegram.org/bot${token}`;
    }

    isThereToken(token: string) {
        if (!token) throw new Error("There is no Telegram Token in TelegramLogger Class Constructor");
    }

    isThereChannel(channel: string) {
        if (!channel) throw new Error("There is no Telegram Channel name in TelegramLogger Class Constructor");
    }

    sendMessage(type: string, message: string) {
        const logMessage = `${type} \n\n <b>CREATED_AT:</b> ${DateTime.getNow()}\n ${message}`;

        const urlParams = encodeURI(`chat_id=${this.channelName}&text=${logMessage}&parse_mode=HTML`);

        const url = `${this.baseUrl}/sendMessage?${urlParams}`;

        this.sendRequest(url);
    }

    logNewTransaction(
        id: string,
        created_at: string,
        type: string,
        category: string,
        description: string,
        total: string,
    ) {
        const log = `
			<b>Transaction ID:</b> ${id}
			<b>Created At:</b> ${created_at}
			<b>Type:</b> ${type}
			<b>Category:</b> ${category}
			<b>Description:</b> ${description}
			<b>Total:</b> ${total}
        `;

        const logMessage = `New Transaction \n\n <b>CREATED_AT:</b> ${DateTime.getNow()}\n ${log}`;

        const urlParams = encodeURI(`chat_id=${this.channelName}&text=${logMessage}&parse_mode=HTML`);

        const url = `${this.baseUrl}/sendMessage?${urlParams}`;

        this.sendRequest(url);
    }

    sendRequest(url: string) {
        return https
            .get(url, (res) => {
                const { statusCode } = res;
                if (statusCode !== 200) {
                    let data: string;
                    res.on("data", (chunk) => {
                        data += chunk;
                    });
                    res.on("end", () => {
                        console.log(data);
                    });
                }
            })
            .on("error", (e) => {
                console.log(e);
            });
    }
}

export default new TelegramBOTLogger(
    process.env.TELEGRAM_BOT_HTTP_TOKEN as string,
    process.env.TELEGRAM_BOT_CHANNEL_ID as string,
);
