// grid[number] = columns
// grid.length = rows

const baseState = 0;
const baseRows = 10;
const grid = [];

const numberOfColumnsInput = document.querySelector('#numberOfColumns')
const numberOfRowsInput = document.querySelector('#numberOfRows')

const getTotalColumns = () => grid[0]?.length ?? 0;
const getTotalRows = () => grid.length;


const createTile = (row, column) => {
  
  
  const tile = document.createElement('div');

  
  tile.classList.add('tile')
  tile.innerHTML = `${row}, ${column}`;
  
  function setTileStyle() {
    tile.style.background = activeTileStyle 
    tileData.color = activeTileStyle
  }

  const tileData = {
    el:tile,
    color: baseState,
    row,
    column,
    setTileStyle,
  }

  tile.addEventListener('click',  () =>{
    activeTool?.click(tileData);
  })
  tile.addEventListener('mousedown', () => {
    activeTool?.mousedown(tileData);
  })

  tile.addEventListener('mouseup', () => {
    activeTool?.mouseup(tileData);
  })

  tile.addEventListener('mouseenter', () => {
    activeTool?.mouseenter(tileData);
  })

  tile.addEventListener('mouseleave', () => {
    activeTool?.mouseleave(tileData);
  })

  return tileData
}

const getTile = (row, column) => {
  return grid[row][column]
}

const addColumn = () => {
  const columnNumber = getTotalColumns();
  const column = [];

  grid.forEach((element, row) => {

    element.push(createTile(row, columnNumber))
  });

  numberOfColumnsInput.value = getTotalColumns()

}

const addRow = () => {
  const rowNumber = getTotalRows()
  const row = []

  for (let column = 0; column < getTotalColumns(); ++column) {
    row.push(createTile(rowNumber, column))
  }

  grid.push(row);

  numberOfRowsInput.value = getTotalRows()
}

const removeRow = () => {
  grid.pop();
}

const removeColumn = () => {
  for (let rowIndex = grid.length -1; rowIndex >= 0; rowIndex--) {
    grid[rowIndex].pop();
  }
}


const renderGrid = () => {
  const gridElement = document.querySelector('#grid')
  gridElement.innerHTML = '';

  grid.forEach(row => {
    row.forEach(column => {
      gridElement.appendChild(column.el)
    })
  })

  gridElement.style.gridTemplateColumns = `repeat(${getTotalColumns()}, 44px)`;
  gridElement.style.gridTemplateRows = `repeat(${getTotalRows()}, 44px)`
}

numberOfRowsInput.addEventListener('change', (e) =>{
  const currentNumberOfRows = getTotalRows();
  const newNumberOfRows = e.target.value;
  const diff = newNumberOfRows - currentNumberOfRows;

  if (diff > 0) {
    UTILS.repeat(addRow, diff);
  } else {
    UTILS.repeat(removeRow, Math.abs(diff))
  }

  renderGrid();
})

numberOfColumnsInput.addEventListener('change', (e) =>{
  const currentNumberOfColumns = getTotalColumns();
  const newNumberOfColumns = e.target.value;
  const diff = newNumberOfColumns - currentNumberOfColumns;

  if (diff > 0) {
    UTILS.repeat(addColumn, diff);
  } else {
    UTILS.repeat(removeColumn, Math.abs(diff))
  }

  renderGrid();

})

/**
 * DEFAULTS
 */

for (let i = 0; i < baseRows; i++) {
  addRow(i);
  addColumn();
}

renderGrid();