const services = {
  rra: "tel://*182*2*{1}#",
  momo: "tel://*182*{1}*{2}#",
  electricity: "tel://*182*{1}#",
  airtimemy: "tel://*182*2*1*1*1*{1}#",
  airtimeothers: "tel://*182*2*1*1*{1}*{2}#",
  irembo: "tel://*182*3*7*{1}#",
  mtnbill: "tell://*182*3*6*{1}#",
  phone: "tel//:*182*1*1*{2}*{1}#",
  tapandgobalance: "tel://*182*3*6*{1}#",
  tapandgocard: "tel://*182*1*1*{1}*{2}#",
  water: "tel://182*3*5*{1}#",
};

export const POST = async ({ request, locals }) => {
  const { provider, info } = await request.json();

  const serviceUrl = services[provider];
  let ussdCode = "";

  if (Object.keys(info).length > 1) {
    ussdCode = serviceUrl
      .replace("{1}", info.value1)
      .replace("{2}", info.value2);
  } else {
    ussdCode = serviceUrl.replace("{1}", info.value1);
  }

  const apiUrl = "http://localhost:9501/api?action=sendmessage";

  const requestBody = new URLSearchParams({
    username: "admin",
    password: "Rukundo@12",
    recipient: locals?.user[0]?.phone,
    messagedata: ussdCode,
  });

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: requestBody.toString(),
    });

    if (!response.ok) {
      return {
        success: false,
        message: `Failed to send USSD request: ${result.statusmessage}`,
      };
    }

    return new Response(
      JSON.stringify({
        message: "USSD request sent successfully.",
        success:true
      }),
    );
  } catch (err) {
    console.log(err);
    return new Response(
        JSON.stringify({ message: "USSD request unable to send." , success:false}),
    );
  }
};
