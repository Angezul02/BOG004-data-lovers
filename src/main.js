 import { example } from './data.js'; 
 import data from './data/pokemon/pokemon.js'; 


 console.log(data.pokemon);

document.getElementById("buttonOne").addEventListener("click", () =>{
  document.getElementById("firtsPage1").style.display="none";
  /*document.getElementById("footerFirsPage").style.display="none";*/
  document.getElementById("secondPage2").style.display="block";
  
})

document.getElementById("buttonhome").addEventListener("click", () =>{
  document.getElementById("secondPage2").style.display="none";
  document.getElementById("firtsPage1").style.display="block";
   
})



/*datos contenidos en la tarjeta*/
let rootDiv= document.getElementById("root");
let cardInner= document.createElement("div");
cardInner.setAttribute("class","cardInnerPoke");

rootDiv.appendChild(cardInner);

data.pokemon.forEach((pokemon)=>{
  
  let containerDataCard = document.createElement("div");
  containerDataCard.setAttribute("class","styleCard");

  /*Agregar la imagen al contenedor containesDataCard*/

  let picturePokemon = document.createElement("img");
  picturePokemon.src=pokemon.img;
  containerDataCard.appendChild(picturePokemon);
  console.log(picturePokemon);

  /*Agregar el numero del pokemon al contenedor containesDataCard*/ 
  
  let numPokemon=document.createElement("h3");
  numPokemon.innerText=pokemon.num;
  containerDataCard.appendChild(numPokemon);

 /*Agregar el nombre del pokemon al contenedor containesDataCard*/  

  let namesPokemon=document.createElement("h2");
  namesPokemon.innerText=pokemon.name;
  containerDataCard.appendChild(namesPokemon);

  /*Agregar el tipo de pokemon al contenedor containesDataCard*/ 

  pokemon.type.forEach((typePoke)=> {
    let typePokemonImg= document.createElement("img");
    typePokemonImg.src= "./data/Img/icons/" + typePoke + ".webp";
    containerDataCard.appendChild(typePokemonImg);
    console.log(typePokemonImg);
   })

  /*Agregar el Height (altura) del pokemon al contenedor containesDataCard*/ 
  
  let tittleHeight= document.createElement("h3");
  tittleHeight.innerText="Height";
  tittleHeight.setAttribute("class","styleHeight");
  containerDataCard.appendChild(tittleHeight);

  let heightPokemon=document.createElement("p");
  heightPokemon.innerText= pokemon.size.height;
  containerDataCard.appendChild(heightPokemon);

/*Agregar el weight (peso) del pokemon al contenedor containesDataCard*/ 

  let tittleweight= document.createElement("h3");
  tittleweight.innerText="Weight";
  tittleweight.setAttribute("class","styleweight");
  containerDataCard.appendChild(tittleweight);

  let weightPokemon=document.createElement("p");
  weightPokemon.innerText= pokemon.size.weight;
  containerDataCard.appendChild(weightPokemon);

/*creamos el segundo div para la parte posterior de la tarjeta (containerDataCardReverse)*/

  let containerDataCardReverse = document.createElement("div");
  containerDataCardReverse.setAttribute("class","styleCardReverse");

/*Agregar las resistencias de los pokemones al contenedor containerDataCardReverse*/

  let resistantPokemon = document.createElement("div");
  resistantPokemon.setAttribute("class", "resistPokeStyle");
  

  let tittleResistant= document.createElement("h3");
  tittleResistant.innerText="Resistant";
  tittleResistant.setAttribute("class","styleHeight");
  containerDataCardReverse.appendChild(tittleResistant);

  pokemon.resistant.forEach((resist)=> {
     let resistantPokeImg= document.createElement("img");
     resistantPokeImg.src= "./data/Img/icons/" + resist + ".webp";
     resistantPokemon.appendChild(resistantPokeImg);
     containerDataCardReverse.appendChild(resistantPokemon);
     console.log(resistantPokeImg);
    })


  /*Agregar las debilidades de los pokemones al contenedor containerDataCardReverse*/

  let weaknessesPokemon = document.createElement("div");
  weaknessesPokemon.setAttribute("class", "weaknessesPokeStyle");
  

  let tittleWeaknesses= document.createElement("h3");
  tittleWeaknesses.innerText="Weaknesses";
  tittleWeaknesses.setAttribute("class","tittleWeaknesses");
  containerDataCardReverse.appendChild(tittleWeaknesses);

  pokemon.weaknesses.forEach((weak)=> {
     let weaknessesPokeImg= document.createElement("img");
     weaknessesPokeImg.src= "./data/Img/icons/" + weak + ".webp";
     weaknessesPokemon.appendChild(weaknessesPokeImg);
     containerDataCardReverse.appendChild(weaknessesPokemon);
     console.log(weaknessesPokeImg);
    })
  
  /*Agregar los stats de los pokemones al contenedor containerDataCardReverse*/  

  /* let statsPokemonDiv=document.createElement("div");
  statsPokemonDiv.setAttribute("class", "stastPokeDiv");
  containerDataCardReverse.appendChild(statsPokemonDiv);


  let statsPokemon=document.createElement("table");
  statsPokemon.setAttribute("class","tableStast");
  statsPokemonDiv.appendChild(statsPokemon);
 */
  
  
  cardInner.appendChild(containerDataCard); 
  cardInner.appendChild(containerDataCardReverse);
})


/*src\data\Img\icons\water.webp*/

