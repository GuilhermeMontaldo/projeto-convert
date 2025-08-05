const amount = document.getElementById("amount")

// Manipulando o input amount para somente receber números.
amount.addEventListener("input", () => {
    // criando uma regex para apenas aceitar números
    const hasCharactersRegex = /\D+/g
    // removendo qualquer caractere NaN
    amount.value = amount.value.replace(hasCharactersRegex, "")
})