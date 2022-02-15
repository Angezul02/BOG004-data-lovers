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

data.pokemon.forEach((pokemon)=>{
  
  let containerDataCard = document.createElement("div");
  containerDataCard.setAttribute("class","styleCard");
  let picturePokemon = document.createElement("img");
  picturePokemon.src=pokemon.img;
  containerDataCard.appendChild(picturePokemon);
  console.log(picturePokemon);
  
  let numPokemon=document.createElement("h3");
  numPokemon.innerText=pokemon.num;
  containerDataCard.appendChild(numPokemon);

  let namesPokemon=document.createElement("h2");
  namesPokemon.innerText=pokemon.name;
  containerDataCard.appendChild(namesPokemon);

  
  rootDiv.appendChild(containerDataCard); 
})




