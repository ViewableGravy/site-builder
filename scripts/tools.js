
let isDragging = false;

const MOUSE_EVENTS = {
  CLICK: 'click',
  MOUSE_DOWN: 'mousedown',
  MOUSE_UP: 'mouseup',
  MOUSE_ENTER: 'mouseenter',
  MOUSE_LEAVE: 'mouseleave'
}
const { 
  CLICK,
  MOUSE_DOWN,
  MOUSE_UP,
  MOUSE_ENTER,
  MOUSE_LEAVE
} = MOUSE_EVENTS;



const pencilTool = {
  [CLICK]: (tile) => {
  },
  [MOUSE_DOWN]: (tile) => {
    tile.setTileStyle();
    isDragging = true;
  },
  [MOUSE_UP]: (tile) => {
    tile.setTileStyle();
    isDragging = false;
  },
  [MOUSE_ENTER]: (tile) => {
    if (!isDragging) return
    tile.setTileStyle()
  },
  [MOUSE_LEAVE]: (tile) => {
    if (!isDragging) return
    
  }
}

const fillTool = {
  [CLICK]: (tile) => {
    const allTiles = walkTile([], tile);
    allTiles.forEach(tile => {
      tile.setTileStyle();
    })
  },
  [MOUSE_DOWN]: (tile) => {
  },
  [MOUSE_UP]: (tile) => {
  },
  [MOUSE_ENTER]: (tile) => {
  },
  [MOUSE_LEAVE]: (tile) => {
  }
}

const tools = {
  'pencil-tool': pencilTool,
  'fill-tool': fillTool,
}

let activeTool = pencilTool;
document.querySelector('#pencil-tool').classList.add('selected')

Object.entries(tools).forEach(([id, toolObject])=> {
  const tool = document.querySelector(`#${id}`);
  tool.addEventListener('click', ()=> {
    document.querySelector('.tool.selected')?.classList?.remove('selected')
    activeTool = toolObject;

    tool.classList.add('selected');
  })
})
