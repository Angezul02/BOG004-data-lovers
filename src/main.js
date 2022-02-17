import { filterPokemon } from "./data.js";
import data from "./data/pokemon/pokemon.js";

//Declaración variable global
const dataPokemon = data.pokemon;

//Contenedor principal en el HTML
let rootDiv = document.getElementById("root");



const paintData = (data) => {
  console.log('data: ', data)
  let pokemonsInformation = ''
  data.forEach((elemento) => {
    let boxPokemon = `
    <div class= "madre">
      <div class="containerDataCard">
        <img src="${elemento.img}"/>
        <h3>${elemento.name}</h3>
        <h4>${elemento.num}</h4>
        <p>${elemento.type}</p>
        
        <h3>Heigth</h3> 
        <p>${elemento.size.height}</p>

      </div>
      <div class="containerDataCardReverse">
        <p>reverso</p>
      </div>
    </div>
    `
    pokemonsInformation += boxPokemon 
  })
  rootDiv.innerHTML = pokemonsInformation
}

paintData(dataPokemon)


// Click a botón que lleva a página 2
document.getElementById("buttonOne").addEventListener("click", () => {
  document.getElementById("firtsPage1").style.display = "none";
  document.getElementById("secondPage2").style.display = "block";
});

// Click a botón que retorna a home
document.getElementById("buttonhome").addEventListener("click", () => {
  document.getElementById("secondPage2").style.display = "none";
  document.getElementById("firtsPage1").style.display = "block";
});
