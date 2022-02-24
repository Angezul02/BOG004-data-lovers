import { filterPokemon } from '../src/data.js';
let muestraInfoPoke= [
  {"num": "001",
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
  { "num": "002",
  "name": "ivysaur",
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
  "num": "003",
    "name": "venusaur",
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
  "num": "003",
    "name": "venusaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
  "type": [
    "grass",
    "poison"
    ],
}
]
let resultado=[
  {"num": "001",
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
  { "num": "002",
  "name": "ivysaur",
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
  "num": "003",
    "name": "venusaur",
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
  "num": "003",
    "name": "venusaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
  "type": [
    "grass",
    "poison"
    ],
}
]

describe('filterPokemon', () => {
  it('is a function', () => {
    expect(typeof filterPokemon).toBe('function');
  });

  it('returns `filterPokemon`', () => {
    expect(filterPokemon(muestraInfoPoke, "grass")).toBe(resultado);
  });
});


/* describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
 */