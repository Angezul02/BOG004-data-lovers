
import { filterPokemon } from '../src/data.js';
import { filterGenerationPokemon} from '../src/data.js';
import {dataPokemonSort} from '../src/data.js';

const muestraInfoPoke=  [
  {
    "num": "004",
  "name": "charmander",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
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
  it('debería estar en la posición 0', () =>{
    const result = dataPokemonSort(muestraInfoPoke, "name");
    expect(result[6].name).toEqual('jolteon');
  });
npm});
