/**
 * @jest-environment jsdom
 */

/* import { describe, it } from 'eslint/lib/rule-tester/rule-tester'; 
import { it } from 'eslint/lib/rule-tester/rule-tester'; */
import { filterPokemon } from '../src/data.js';
import { filterGenerationPokemon} from '../src/data.js';
import {dataPokemonSort} from '../src/data.js';
import {spawnOrder} from '../src/data.js';

const muestraInfoPoke=  [
  {
    "num": "004",
  "name": "charmander",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "spawn-chance": "0.253",
  "type": [
    "fire"
  ],
  },
    {
      "num": "001",
      "name": "bulbasaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "spawn-chance": "0.69", 
      "type": [
        "grass",
        "poison"
      ],
    },
    
    {
    "num": "069",
    "name": "bellsprout",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "spawn-chance": "1.15",
    "type": [
      "grass",
      "poison"
    ],
    },
    {
      "num": "135",
    "name": "jolteon",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "spawn-chance": "0.012",
    "type": [
      "electric"
    ],
    },
    {
      "num": "174",
    "name": "igglybuff",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "spawn-chance": "0",
    "type": [
      "normal",
      "fairy"
    ],
    },
    {
      "num": "063",
    "name": "abra",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "spawn-chance": "0.42",
    "type": [
      "psychic"
    ],
    },
    {
      "num": "063",
    "name": "abra",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "spawn-chance": "0.42",
    "type": [
      "psychic"
    ],
    },
  ]


describe('filterPokemon',()=>{
  it('debería ser una función', ()=>{
    expect(typeof filterPokemon).toBe('function');
  });

  it('returns `filterPokemon`', () =>{
    expect(filterPokemon(muestraInfoPoke, "electric")).toHaveLength(1);
  });
  it('returns `filterPokemon`', () =>{
    expect(filterPokemon(muestraInfoPoke, "grass")).toHaveLength(2);
  });
})

describe('filterGenerationPokemon',()=>{
  it('debería ser una función', ()=>{
    expect(typeof filterGenerationPokemon).toBe('function');
  })
  it('returns `filterGenerationPokemon`', () =>{
    expect(filterGenerationPokemon(muestraInfoPoke, "kanto")).toHaveLength(6);
  });
  it('returns `filterGenerationPokemon`', () =>{
    expect(filterGenerationPokemon(muestraInfoPoke, "johto")).toHaveLength(1);
  });
});

describe('dataPokemonSort',()=>{
  it('debería ser una función', ()=>{
    expect(typeof dataPokemonSort).toBe('function');
  })
  it('debería estar en la posición 6', () =>{
    const result = dataPokemonSort(muestraInfoPoke, "name");
    expect(result[6].name).toEqual('jolteon');
  });
});

describe('spawnOrder', () => {
  it ('debería ser una funcion', () =>{
    expect(typeof spawnOrder).toBe('function');
  })
  it('debería mostrar los pokemones con mayor frecuencia de aparición', () =>{
    const resultSpawnOrder = spawnOrder(muestraInfoPoke,["spawn-chance"]);
    expect(resultSpawnOrder[0].name).toEqual('bellsprout');
  });
  it('debería mostrar los pokemones con mayor frecuencia de aparición', () =>{
    const resultSpawnOrder = spawnOrder(muestraInfoPoke,["spawn-chance"]);
    expect(resultSpawnOrder[6].name).toEqual('igglybuff');
  });
});
