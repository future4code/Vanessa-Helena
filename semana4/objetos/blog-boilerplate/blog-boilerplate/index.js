function inserindoDados() {
  //let formulando = {
  // titulo: titulo.value,
  //  autor: autor.value,
  // conteudo: conteudo.value
  //};
  // const formLista = ["titulo", "autor", "conteudo"];
  // formLista.push(formulando)
  //console.log(formulando)
  //document.getElementById("form").innerHTML += `<p>${titulo.value}</p>`;
  // document.getElementById("form").innerHTML += `<p>${autor.value}</p>`;
  //document.getElementById("form").innerHTML += `<p>${conteudo.value}</p>`;
  //titulo.value = ""; // Deixar o input vazio após escrever algo
  //autor.value = "";
  //conteudo.value = "";
}

function lista() {
  let titulo = document.getElementById("titulo-post");

  let autor = document.getElementById("autor-post");

  let conteudo = document.getElementById("conteudo-post");

  let formulando = { // Formulando meu objeto
    titulo: titulo.value, // Titulo chave 
    autor: autor.value, // autor chave
    conteudo: conteudo.value, // conteudo chave
  };

  const formLista = [];
  formLista.push(formulando);

  for (i = 0; i < formLista.length; i++) {
    document.getElementById(
      "form"
    ).innerHTML += `<p>Título: ${titulo.value}</p>`;
    document.getElementById("form").innerHTML += `<p>Autor: ${autor.value}</p>`;
    document.getElementById(
      "form"
    ).innerHTML += `<p>Conteúdo: ${conteudo.value}</p>`;
    titulo.value = "";
    autor.value = "";
    conteudo.value = "";
  }
}
