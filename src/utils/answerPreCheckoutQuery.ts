import axios from 'axios';

export async function answerPreCheckoutQuery(botToken: string, preCheckoutQueryId: string, ok: boolean) {
    try {
        await axios.post(
            `https://api.telegram.org/bot${botToken}/answerPreCheckoutQuery`,
            {
                pre_checkout_query_id: preCheckoutQueryId,
                ok,
            }
        );
        console.log('PreCheckoutQuery подтвержден!');
    } catch (error) {
        console.error('Ошибка подтверждения:', error);
    }
}
