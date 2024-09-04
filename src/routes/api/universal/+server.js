const services = {
  rra: "tel://*182*2*{}#",
  momo: "tel://*182*{1}*{2}#",
};
export const POST = async ({ request, fetch, url }) => {
  const info = Object.fromEntries(await request.formData());
  const provider = url.searchParams.get("provider");

  const serviceUrl = services[provider];
  let ussdCode = "";

  if (Object.keys(info).length > 1) {
    ussdCode = serviceUrl
      .replace("{1}", info.value1)
      .replace("{2}", info.value2);
  } else {
    ussdCode = serviceUrl.replace("{}", info.value1);
  }

  await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify({ ussdCode }),
  });
  return new Response(JSON.stringify({ message: "nice" }));
};
