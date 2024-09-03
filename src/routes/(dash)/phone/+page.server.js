export const actions = {
  async sendSMS({ request, fetch }) {
    const data = await request.formData();
    const amount = data.get("amount");
    const receiverNumber = data.get("receiverNumber");

    const ussdCode = `tel:*182*1*1*${receiverNumber}*${amount}#`;

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

