import axios from 'axios';

export async function generateInvoice(botToken: string) {
    const apiUrl = `https://api.telegram.org/bot${botToken}/createInvoiceLink`;

    const invoiceData = {
        title: 'Test', 
        description: 'Test', 
        payload: 'Test', 
        currency: 'XTR', 
        prices: [
            {
                label: 'Test', 
                amount: 1
            }
        ],
        need_name: false,
        need_phone_number: false,
        need_email: false,
        need_shipping_address: false,
        is_flexible: false
    };

    try {
        const response = await axios.post(apiUrl, invoiceData);
        console.log('Invoice link:', response.data.result);
        return response.data.result;
    } catch (error) {
        console.error('Error creating invoice:', error);
        throw error;
    }
}

