// estas funciones son de ejemplo

export const filterPokemon = (data, parm) => {

  let infoActualPokemon = [];
    data.type.forEach(element => {
      if(element == "grass"){
        infoActualPokemon.push(element);
    }

    console.log(infoActualPokemon);


    
  });
  


  console.log("esto es: ", data);
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

