
export const actions = {
    async sendSMS({ request , locals}) {
        const data = await request.formData();
        const amount = data.get('amount');
        const receiverNumber = data.get('receiverNumber');
        const addAgentCharge = data.get('addAgentCharge') === 'on';

        const ussdCode = `tel:*182*1*1*${receiverNumber}*${amount}#`;
        const apiUrl = 'http://localhost:9501/api?action=sendmessage';

        const requestBody = new URLSearchParams({
            username: 'admin', 
            password: 'Rukundo@12', 
            recipient: locals?.user[0]?.phone,
            messagedata: ussdCode
        });
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: requestBody.toString()
            });

            const result = await response.json();

            if (result.status !== 'OK') {
                return { success: false, message: `Failed to send USSD request: ${result.statusmessage}` };
            }

            return { success: true, message: 'USSD request sent successfully.' };
        } catch (err) {
            return { success: false, message: `Error: ${err.message}` };
        }
    }
};