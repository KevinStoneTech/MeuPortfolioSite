// pegar o container do texto
const pageHome = document.querySelector("#portfolio")

// Criar a barrinha de progresso
let bar = document.createElement("body")
// Criar os estilos da barrinha
bar.style.height = "5px"
bar.style.width = "0"
bar.style.backgroundColor = "#ff0009"
bar.style.position = "fixed"
bar.style.top = "0"
bar.style.left = "0"
bar.style.zIndex = "9999"
bar.style.transition = "0.1s"
// adiciona no corpo da pádina
document.body.append(bar)

function updateBar(){
  // o tamanho da caixa que contem o texto
  const textHeight = pageHome.offsetHeight
  // verifica em que posiçao da pagina eu estou
  const pagePositionY = window.pageYOffset
  // regra de 3
  const updatedBar =  (pagePositionY / textHeight) * 130

  bar.style.width = updatedBar + "%"
}

window.addEventListener("load", () => {
    // verifica o movimento do scroll
    document.addEventListener("scroll", updateBar)
})