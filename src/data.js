// estas funciones son de ejemplo

export const filterPokemon = (data, type) => {
  let filterTypePoke = data.filter(
    (typoPoke) => typoPoke.type.includes(type) // only arrays //
  );
  return filterTypePoke; /* Esto me retorna una data con la información filtrada */
};

export const filterGenerationPokemon = (data, generation) => {
  let filterGenerationPoke = data.filter(
    (generationPoke) =>
      generationPoke.generation.name ==
      generation /* Lo igualamos para evaluar que generación exista y cumpla con el argumento dado */
  );
  return filterGenerationPoke;
};

export const dataPokemonSort = (data, sortName) => {
  let sortNamePokemon = data.sort(function compare(a, b) {
    if (a[sortName] < b[sortName]) {
      return -1;
    }
    if (a[sortName] > b[sortName]) {
      return 1;
    }

    return 0;
  });
  return sortNamePokemon;
};

export const spawnOrder = (data, sortSpawn) => {
  let spawnSort = data.sort(function compare(a, b) {
    if (a[sortSpawn] < b[sortSpawn]) {
      return 1;
    }
    if (a[sortSpawn] > b[sortSpawn]) {
      return -1;
    }
    return 0;
  });
  return spawnSort;
};
