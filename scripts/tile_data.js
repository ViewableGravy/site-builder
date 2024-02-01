const TILE_STYLES = {
  PALISADE: 'palisade',
  GRASS: 'grass',
  WATER: 'water',
  PAVEMENT: 'pavement'
}

const { PALISADE, GRASS, WATER, PAVEMENT } = TILE_STYLES

const tileStyles = {
  [PALISADE]: '#795548',
  [GRASS]: 'green',
  [WATER]: 'blue',
  [PAVEMENT]: 'gray'
}

let activeTileStyle = null;

const styleTileDictionary = {}

function createStyleTile(name, colour) {
  const styleTile = document.createElement('div');
  const styleTileText = document.createElement('span');

  styleTile.classList.add('styletile');
  styleTileText.innerHTML = name;

  styleTile.appendChild(styleTileText)
  styleTile.style.background = colour;

  styleTile.addEventListener('click', ()=>{
    const selectedStyleTile = document.querySelector('.styletile.selected')
    if (selectedStyleTile){
      selectedStyleTile.classList.remove('selected')
    }
    styleTile.classList.add('selected');
    activeTileStyle = colour
  })

  styleTileDictionary[name] = styleTile;
  return styleTile;
}


/**
 * DEFAULTS
 */

const tileStyleSelector = document.querySelector('#tileStyleSelector')

Object.entries(tileStyles).forEach(([name, colour])=> {
  tileStyleSelector.appendChild(createStyleTile(name, colour))
})

styleTileDictionary[PALISADE].click()