import { filterPokemon } from "./data.js";
import data from "./data/pokemon/pokemon.js";

//Declaración variable global
const dataPokemon = data.pokemon;

//Contenedor principal en el HTML
let rootDiv = document.getElementById("root");

const paintData = (data) => {
  let pokemonsInformation = "";
  data.forEach((elemento) => {

    /*  Declaramos la variable  typeImg para guardar los iconos del tipo de Pokemon despues de recorrer el array con forEach y lo utilizamos para mostrarlo en la etiqueta img*/
    let typeImg = elemento.type.map((type)=>{
      return `<img class = "imgTypePoke" src ="./data/Img/icons/${type}.webp"/>`
    }).join("")

    /* Declaramos la variable  resistantPokemon para guardar los iconos de resistencia de Pokemon despues de recorrer el array con forEach y lo utilizamos para mostrarlo en la etiqueta img */
    let resistantPokemon = elemento.resistant.map((resist) =>{
     return `<img class="imgresisPoke" src="./data/Img/icons/${resist}.webp"/>`
    }).join("")

    let weaknessesPokemon = elemento.weaknesses.map((weak) => {
      return `<img class="imgweakPoke" src="./data/Img/icons/${weak}.webp"/>`
    }).join("")

    /* El div madre contiene toda la tarjeta - El div  containerDataCard contiene la información de la parte de adelante de la tarjeta VS containerDataCardReverse que contiene la parte de atras*/
    let boxPokemon = `
    <div class= "madre">
      <div class="containerDataCard">
        <img class="pokemonImg" src="${elemento.img}"/>
        <h3 class="namePokemon">${elemento.name}</h3>
        <h4 class="numPokemon">${elemento.num}</h4>

        <table class="tableSize">
        <tr class="sizeTittle">
          <th>Heigth</th>
          <th>Weight</th>
        </tr>
        <tr class="sizeNum">
        <td>${elemento.size.height}</td>
        <td>${elemento.size.weight}</td>
        </tr>
        </table>

        <h3 class="typePokemonName">Type</h3>
        <div class="containerTypeImg"> 
         ${typeImg}
        </div>
        
      </div>
      <div class="containerDataCardReverse">
      <img class="pokemonImgReverse" src="${elemento.img}"/>
      <h3 class=tittleResist >Resistant</h3> 
      <div class="containerResistantImg"> 
        ${resistantPokemon}
      </div>
      <h3 class= tittleWeak >Weaknesses</h3> 
      <div class="containerWeakImg"> 
        ${weaknessesPokemon}
      </div>
      <table class= "tablePokemonStats">
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
// invocar la función 
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
