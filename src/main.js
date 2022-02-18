import { filterPokemon } from "./data.js";
import data from "./data/pokemon/pokemon.js";

//Declaración variable global
const dataPokemon = data.pokemon;

//Contenedor principal en el HTML
let rootDiv = document.getElementById("root");

const paintData = (data) => {
  console.log("data: ", data);
  let pokemonsInformation = "";
  data.forEach((elemento) => {

    /*  Declaramos la variable  typeImg para guardar los iconos del tipo de Pokemon despues de recorrer el array con forEach y lo utilizamos para mostrarlo en la etiqueta img*/
    let typeImg = elemento.type

    /* Declaramos la variable  resistantPokemon para guardar los iconos de resistencia de Pokemon despues de recorrer el array con forEach y lo utilizamos para mostrarlo en la etiqueta img */
    let resistantPokemon = "";
    elemento.resistant.forEach((resist) =>{
      let resistantPokeImg = "./data/Img/icons/" + resist + ".webp";
      resistantPokemon = resistantPokeImg;
    })

    let weaknessesPokemon = "";
    elemento.weaknesses.forEach((weak) => {
      let weaknessesPokeImg = "./data/Img/icons/" + weak + ".webp";
      weaknessesPokemon = weaknessesPokeImg
    })

    /* El div madre contiene toda la tarjeta - El div  containerDataCard contiene la información de la parte de adelante de la tarjeta VS containerDataCardReverse que contiene la parte de atras*/
    let boxPokemon = `
    <div class= "madre">
      <div class="containerDataCard">
        <img class="pokemonImg" src="${elemento.img}"/>
        <h3 class="namePokemon">${elemento.name}</h3>
        <h4 class="numPokemon">${elemento.num}</h4>
        <h3 class="typePokemonName">Type</h3>
        <div class="typePokeImg">
          ${typeImg.map((e) =>`<img class="imgTypePokemon" src="./data/Img/icons/${e}.webp"/>`  ).join("")}
        </div>
        <table class="tableSize">
        <tr>
          <th>Heigth</th>
          <th>Weight</th>
        </tr>
        <tr>
        <td>${elemento.size.height}</td>
        <td>${elemento.size.weight}</td>
        </tr>
        </table>
      </div>
      <div class="containerDataCardReverse">
      <h3>Resistant</h3> 
      <img src="${resistantPokemon}"/>
      <h3>Weaknesses</h3> 
      <img src="${weaknessesPokemon}"/>
      <table>
      <tr>
      <th>Attack</th>
      <th>Defense</th>
      <th>Stamina</th>
      <th>CP</th>
      <th>HP</th>
      </tr>
      <tr>
      <td>${elemento.stats['base-attack']}</td>
      <td>${elemento.stats['base-defense']}</td>
      <td>${elemento.stats['base-stamina']}</td>
      <td>${elemento.stats['max-cp']}</td>
      <td>${elemento.stats['max-hp']}</td>
      </tr>
      </table>
      </div>
    </div>
    `;
    pokemonsInformation += boxPokemon;
    console.log("Esto es caja de pokemones" ,boxPokemon);
  });
  rootDiv.innerHTML = pokemonsInformation;
};

paintData(dataPokemon);

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
