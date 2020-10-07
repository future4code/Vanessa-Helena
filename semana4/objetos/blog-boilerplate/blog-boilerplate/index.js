function inserindoDados() {
  

    let titulo = document.getElementById ("titulo-post")
  
  let autor = document.getElementById ("autor-post")

  let conteudo = document.getElementById ("conteudo-post")

  
    let formulario = {
    titulo: titulo.value,
    autor: autor.value,
    conteudo: conteudo.value
  };

  
  const formLista = ["titulo", "autor", "conteudo"];
    

  document.getElementById("form").innerHTML += `<p>${titulo.value}</p>`;
  document.getElementById("form").innerHTML += `<p>${autor.value}</p>`;
  document.getElementById("form").innerHTML += `<p>${conteudo.value}</p>`;

  titulo.value = "";
  autor.value = "";
    conteudo.value = "";

//console.log(formLista)

  
    //console.log(formLista)
  

    //et titulo = document.getElementById("titulo-post")
  
}


