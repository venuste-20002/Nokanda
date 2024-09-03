export const actions= {
    async sendSMS({ request, fetch }) {
        const data = await request.formData();
        const number = data.get("number")
        const ussdCode = `tel=*182*3*6*${number}#`
        
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