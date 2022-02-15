/* import { example } from './data.js'; */
// import data from './data/lol/lol.js';
/* import data from './data/pokemon/pokemon.js'; */
// import data from './data/rickandmorty/rickandmorty.js';

/* console.log(example, data); */

document.getElementById("buttonOne").addEventListener("click", () =>{
  document.getElementById("firtsPage1").style.display="none";
  /*document.getElementById("footerFirsPage").style.display="none";*/
  document.getElementById("secondPage2").style.display="block";
  
})

document.getElementById("buttonhome").addEventListener("click", () =>{
  document.getElementById("secondPage2").style.display="none";
  document.getElementById("firtsPage1").style.display="block";
   
})

