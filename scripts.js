// Cotação de moedas do dia.
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

// Obtendo os elementos
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amount para somente receber números.
amount.addEventListener("input", () => {
  // criando uma regex para apenas aceitar números
  const hasCharactersRegex = /\D+/g;
  // removendo qualquer caractere NaN
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// capturando o evento de submit do formulário.
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }

  function convertCurrency(amount, price, symbol) {
    try {
      // Aplica a classe que exibe o footer
      footer.classList.add("show-result");

      // Exibindo a cotação da moeda.
      description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
    } catch (error) {
      // remove a classe que exibe o footer
      footer.classList.remove("show-result");

      console.log(error);
      alert("Não foi possivel converter. Tente novamente mais tarde!");
    }
  }
};

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value) {
    // Converte para número para utilizar o toLocaleString para formatar no padrão BRL
    // (R$ 00,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

/*
// teste próprio
// recebendo a entreda de valor do currency 
currency.addEventListener("input", (event) => {
    event.preventDefault()
  console.log(currency.value);

  // indicando por meio do switch cada opção e o que ela é
  switch (currency.value) {
    case "USD":
      console.log("Dolar americano");
      break;
    case "EUR":
      console.log("Euro");
      break;
    case "GRP":
      console.log("Libra Esterlina");
      break;
  }
}); */
