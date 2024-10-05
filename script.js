const calcular = document.getElementById("botao");

function imc() {
  let nome = document.getElementById("input__nome").value;
  let altura = document.getElementById("input__altura").value;
  let peso = document.getElementById("input__peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorImc = Math.round(peso / (altura * altura));
    resultado.textContent = `${nome} seu IMC é ${valorImc}`;
  } else {
    resultado.textContent = "Preencha todos os campos";
  }
}

calcular.addEventListener("click", imc);
