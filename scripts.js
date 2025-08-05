// Obtendo os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

// Manipulando o input amount para somente receber números.
amount.addEventListener("input", () => {
  // criando uma regex para apenas aceitar números
  const hasCharactersRegex = /\D+/g;
  // removendo qualquer caractere NaN
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// capturando o evento de submit do formulário.
form.onsubmit = (event) => {
    event.preventDefault()

    console.log(currency.value)
}


/*
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
