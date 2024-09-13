import { error, fail } from "@sveltejs/kit";

export const load = ({ params }) => {
  let provider = params.service;
  console.log("service page reached")
  const services = {
    electricity: {
      name: "Electricity Service",
      provider: "electricity",
      inputs: [
        {
          id: "amount",
          name: "value1",
          placeholder: "Enter Amount",
          value: "amount",
        },
      ],
    },
    momo: {
      name: "Momo Service",
      provider: "momo",
      inputs: [
        {
          id: "amount",
          name: "value1",
          placeholder: "Enter Amount",
        },
        {
          id: "amount2",
          name: "value2",
          placeholder: "Enter Merchant Code",
        },
      ],
    },
    rra: {
      name: "RRA Service",
      provider: "rra",
      inputs: [
        {
          id: "amount",
          name: "value1",
          placeholder: "Enter RRA Referrence No",
        },
      ],
    },
    airtimemy: {
      name: "Airtime Service",
      provider: "airtimemy",
      inputs: [
        {
          id: "amount",
          name: "value1",
          placeholder: "Enter Amount",
        },
      ],
    },
    mtnbill: {
      name: "MTN Bill Service",
      provider: "mtnbill",
      inputs: [
        {
          id: "amount",
          name: "value1",
          placeholder: "Enter Account Number * Phone number",
        },
      ],
    },
    water: {
      name: "Water Service",
      provider: "water",
      inputs: [
        {
          id: "amount",
          name: "value1",
          placeholder: "Enter Water Meter",
        },
      ],
    },
    tapandgocard: {
      name: "TapandGo Card Service",
      provider: "tapandgocard",
      inputs: [
        {
          id: "amount",
          name: "value1",
          placeholder: "Enter Amount",
        },
        {
          id: "amount",
          name: "value2",
          placeholder: "Enter Tap&Go Number",
        },
      ],
    },
    tapandgo: {
      name: "TapandGo Balance Service",
      provider: "tapandgobalance",
      inputs: [
        {
          id: "amount",
          name: "value1",
          placeholder: "Enter Tap&Go Number",
        },
      ],
    },
    irembo: {
      name: "Irembo Service",
      provider: "irembo",
      inputs: [
        {
          id: "amount",
          name: "value1",
          placeholder: "enter bill id",
        },
      ],
    },
    phone: {
      name: "Sending Money Service",
      provider: "phone",
      inputs: [
        {
          id: "amount",
          name: "value1",
          placeholder: "Enter Amount",
        },
        {
          id: "amount",
          name: "value2",
          placeholder: "Enter Reciever's Number",
        },
      ],
    },
    airtimeothers: {
      name: "Airtime Sending Service",
      provider: "airtimeothers",
      inputs: [
        {
          id: "amount",
          name: "value1",
          placeholder: "Enter Amount",
        },
        {
          id: "amount",
          name: "value2",
          placeholder: "Enter Reciever's Number",
        },
      ],
    },
  };

  if (!services[provider]) {
    return error(404, { message: "Page Not Found" });
  }

  return { service: services[provider] };
};

export const actions = {
  send: async ({ request, fetch, url }) => {
    const info = Object.fromEntries(await request.formData());
    const provider = url.searchParams.get("provider");

    const response = await fetch("/api/universal", {
      method: "POST",
      body: JSON.stringify({ info, provider }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (!response.ok) {
      return {success: result?.success, message:result?.message};
    }
   
    return { success: result?.success, message: result?.message };
  },
};
