export const actions= {
    async sendSMS({ request, fetch }) {
        const data = await request.formData();
        const amount = data.get("amount")
        const receiverCode = data.get("receiverCode")
        const ussdCode = `tel=*182*8*1*${receiverCode}*${amount}#`
        
        await fetch("/api/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body:JSON.stringify({ ussdCode }),
          });
          return { success: true };
        },
}