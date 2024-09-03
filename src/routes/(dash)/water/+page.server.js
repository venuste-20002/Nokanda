export const actions= {
    async sendSMS({ request, fetch }) {
        const data = await request.formData();
        const watermeter = data.get("watermeter")
        const ussdCode = `tel=*182*3*5*${watermeter}#`
        
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