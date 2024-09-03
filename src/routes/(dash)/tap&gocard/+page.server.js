export const actions = {
    async sendSMS({ request, fetch }) {
      const data = await request.formData();
      const amount = data.get("amount");
      const tap = data.get("tap");
  
      const ussdCode = `tel:*182*1*1*${tap}*${amount}#`;
  
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body:JSON.stringify({ ussdCode }),
      });
      return { success: true };
    },
  };
  