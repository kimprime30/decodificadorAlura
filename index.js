document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("texto");
  const criptografarBtn = document.getElementById("criptografar");
  const descriptografarBtn = document.getElementById("descriptografar");
  const copiarBtn = document.getElementById("copiar");
  const sidebar = document.getElementById("sidebar");
  const mensagemSidebar = sidebar.querySelector(".psidebar");
  const imagemSidebar = sidebar.querySelector(".nenhumaMensagem");

  criptografarBtn.addEventListener("click", function () {
    const palavraOriginal = textarea.value;

    if (palavraOriginal.trim().length > 0) {
      const palavraCriptografada = criptografar(palavraOriginal);
      mensagemSidebar.textContent = palavraCriptografada;
      imagemSidebar.style.display = "none";
    }
    textarea.value = "";
  });

  descriptografarBtn.addEventListener("click", function () {
    const palavraCriptografada = textarea.value;

    if (palavraCriptografada.trim().length > 0) {
      const palavraDescriptografada = descriptografar(palavraCriptografada);
      mensagemSidebar.textContent = palavraDescriptografada;
      imagemSidebar.style.display = "none";
    }
  });


  copiarBtn.addEventListener("click", function () {
    const textoCopiado = mensagemSidebar.textContent;
    navigator.clipboard.writeText(textoCopiado);
    alert("Texto copiado para a área de transferência!");
  });

  function criptografar(palavra) {
    let palavraCriptografada = "";
    for (let i = 0; i < palavra.length; i++) {
      let letra = palavra[i];
      switch (letra) {
        case "e":
          palavraCriptografada += "enter";
          break;
        case "i":
          palavraCriptografada += "imes";
          break;
        case "a":
          palavraCriptografada += "ai";
          break;
        case "o":
          palavraCriptografada += "ober";
          break;
        case "u":
          palavraCriptografada += "ufat";
          break;
        default:
          palavraCriptografada += letra;
      }
    }
    return palavraCriptografada;
  }

  function descriptografar(palavraCriptografada) {
    let palavra = "";
    let i = 0;
    while (i < palavraCriptografada.length) {
      let letra = palavraCriptografada[i];
      if (
        letra === "e" &&
        palavraCriptografada.substring(i, i + 5) === "enter"
      ) {
        palavra += "e";
        i += 4;
      } else if (
        letra === "i" &&
        palavraCriptografada.substring(i, i + 4) === "imes"
      ) {
        palavra += "i";
        i += 3;
      } else if (
        letra === "a" &&
        palavraCriptografada.substring(i, i + 2) === "ai"
      ) {
        palavra += "a";
        i += 1;
      } else if (
        letra === "o" &&
        palavraCriptografada.substring(i, i + 4) === "ober"
      ) {
        palavra += "o";
        i += 3;
      } else if (
        letra === "u" &&
        palavraCriptografada.substring(i, i + 4) === "ufat"
      ) {
        palavra += "u";
        i += 3;
      } else {
        palavra += letra;
      }
      i++;
    }
    return palavra;
  }
});
