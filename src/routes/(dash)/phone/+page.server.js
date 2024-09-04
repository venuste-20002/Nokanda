export const actions = {
  async sendSMS({ request, fetch }) {
    const data = await request.formData();
    const amount = data.get("amount");
    const receiverNumber = data.get("receiverNumber");

    const ussdCode = `tel:*182*1*1*${receiverNumber}*${amount}#`;

    function isMobile() {
      const regex =
        /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return regex.test(window.navigator.userAgent);
    }
    if (isMobile()) {
      console.log("Mobile device detected");
    } else {
      console.log("Desktop device detected");
    }
    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ ussdCode }),
    });
    return { success: true };
  },
};
