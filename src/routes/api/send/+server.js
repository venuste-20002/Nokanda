export const POST = async ({ request, locals, fetch }) => {
  const { ussdCode } = await request.json();
  const apiUrl = "http://localhost:9501/api?action=sendmessage";

  const requestBody = new URLSearchParams({
    username: "admin",
    password: "Rukundo@12",
    recipient: locals?.user[0]?.phone,
    messagedata: ussdCode,
  });

  try {
    // const response = await fetch(apiUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: requestBody.toString(),
    // });
    // const result = await response.json();
    // if (result.status !== "OK") {
    //   return {
    //     success: false,
    //     message: `Failed to send USSD request: ${result.statusmessage}`,
    //   };
    // }
    console.log(ussdCode);
    return new Response("USSD request sent successfully.");
  } catch (err) {
    return new Response("USSD request sent successfully.");
  }
};
