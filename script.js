const divUserCard = document.getElementById("div-user-card");
const divLoadingCard = document.getElementById("div-loading-card");
const pName = document.getElementById("p-name");
const pEmail = document.getElementById("p-email");
const pAddress = document.getElementById("p-address");
const btnRandom = document.getElementById("btn-random");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  console.log(resp.data.results[0].name.first);
  return resp;
}

function showUser() {
  divUserCard.style.display = "none";
  divLoadingCard.style.display = "";
  const p = callApi();

  divUserCard.style.display = "";
  pName.innerText = `${p.data.results[0].name.first}`;
  divLoadingCard.style.display = "none";
}

btnRandom.onclick = () => {};

showUser();
