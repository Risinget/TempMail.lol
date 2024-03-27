import fetch from "node-fetch";

const createInbox = async (community, domain, prefix) => {
  // domain cse445.com
  const body = {
    community: community,
    domain: domain,
    prefix: prefix,
  };

  const response = await fetch("https://api.tempmail.lol/v2/inbox/create", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  return data;
};
const inbox = await createInbox(true, "cse445.com", "websha");
console.log(inbox.address, inbox.token);


// check the mail {
//   address: 'websha13542@cse445.com',
//   token: '2ksrur61rlf2zqvejp9rk6nda4ndqqvysayvde'
// }


const checkInbox = async (token) => {
  const response = await fetch(
    `https://api.tempmail.lol/v2/inbox?token=${token}`,
    { method : "GET"},
    );

  const data = await response.json();
  return data;
}
const emails = await checkInbox(inbox.token);
console.log(emails);