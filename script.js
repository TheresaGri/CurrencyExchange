const exampleUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";
const exchangerateDisplay =  document.querySelector(".exchangerate-display");

async function loadExchangeRate(from, to) {
 const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`
 const res = await fetch(url);
 if (!res.ok) {
  exchangerateDisplay.innerText = "Could not fetch data";
 }
 const data = await res.json();
 //data.usd;
 //data["usd"];
 console.log(data[to]);
 const rate = data[to];
  exchangerateDisplay.innerText = rate;
}


loadExchangeRate("usd", "jpy");

const CURRENCIES = ["eur", "jyp", "rub", "gbp"];

const currencyDropdown = document.querySelector(".currency-dropdown");

currencyDropdown.innerHTML = CURRENCIES.map((currency) => `<option value = ${currency} >${currency.toLocaleUpperCase()}</option>`);

currencyDropdown.addEventListener("change", (e)=> {
  const newValue = e.target.value;
  loadExchangeRate("usd", newValue);
});