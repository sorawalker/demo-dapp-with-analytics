import {answerPreCheckoutQuery} from "./answerPreCheckoutQuery";
import axios from 'axios';

export async function checkPendingPayments(botToken: string) {
    console.log('Check updates')
    const response = await axios.get(
        `https://api.telegram.org/bot${botToken}/getUpdates`
    );
    const updates = response.data.result;

    updates.forEach((update: any) => {
        if (update.pre_checkout_query) {
            const queryId = update.pre_checkout_query.id;
            console.log('Найден PreCheckoutQuery:', queryId);
            answerPreCheckoutQuery(botToken, queryId, true);
        }
    });
}

export function intervalCallback() {
    checkPendingPayments(window.localStorage.getItem('BOT_TOKEN') as string)
}