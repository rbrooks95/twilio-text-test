require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
console.log(accountSid);
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Nah but lol, finish the sentence 'TINKIN ____'",

    from: "+13867498253",
    to: "3475764863",
  })
  .then((message) => console.log(message.sid))
  .catch((err) => {
    console.log(err);
  });
