function walkTile(exploredTiles = [], tile) {
  exploredTiles.push(tile);

  const newTiles = [tile];

  const {el, color, row, column} = tile;

  function checkColor(targetTile) {
    const hasExploredTarget = exploredTiles.includes(targetTile)
    if (hasExploredTarget) return;
    if (targetTile?.color === color) {
      newTiles.push(...walkTile(exploredTiles, targetTile))
    }
  }

  const rightTile = grid?.[row]?.[column + 1];
  checkColor(rightTile);
  
  const bottomTile = grid?.[row + 1]?.[column];
  checkColor(bottomTile);

  const leftTile = grid?.[row]?.[column - 1];
  checkColor(leftTile);

  const topTile = grid?.[row - 1]?.[column];
  checkColor(topTile);

  return newTiles;
}



function testWalk() {
  const allTiles = walkTile([], grid[0][0]);

  
  console.log('allTiles', allTiles);
}