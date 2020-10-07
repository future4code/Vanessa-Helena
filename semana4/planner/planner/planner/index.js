function pegarInput() {
  let inputUsuario = document.getElementById("tarefa").value;

if (inputUsuario == "") {
    alert("Tarefa não pode ser vazia, digite uma tarefa.");
    let inputUsuario = document.getElementById("tarefa")
        inputUsuario.value = "" 
}
        let diaSemana = document.getElementById("dias-semana");

  switch (diaSemana.value) {
    case "domingo":
      document.getElementById("domingo").innerHTML += `<p>${inputUsuario}</p>`;
      break;
    case "segunda":
      document.getElementById("segunda").innerHTML +=`<p>${inputUsuario}</p>`;
      break;
    case "terca":
      document.getElementById("terca").innerHTML += `<p>${inputUsuario}</p>`;
      break;
    case "quarta":
      document.getElementById("quarta").innerHTML += `<p>${inputUsuario}</p>`;
      break;
    case "quinta":
      document.getElementById("quinta").innerHTML += `<p>${inputUsuario}</p>`;
      break;
    case "sexta":
      document.getElementById("sexta").innerHTML += `<p>${inputUsuario}</p>`;
      break;
    case "sabado":
      document.getElementById("sabado").innerHTML += `<p>${inputUsuario}</p>`;
      break;
  }
}

function mensagemAlertando() {
    

}

//let diaSemana = document.getElementById("dias-semana")
//console.log(segunda)
//`<li>${meuInput.value}</li>`


