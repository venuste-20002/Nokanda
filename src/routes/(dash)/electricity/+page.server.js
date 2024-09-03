export const actions = {
    async sendSMS({ request, fetch }) {
        const data = await request.formData()
        const amount = data.get("amount")
        const meteNumber = data.get("meteNumber")

        const ussdCode = `tel=*182*2*2*1*2*${meteNumber}*${amount}#`
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