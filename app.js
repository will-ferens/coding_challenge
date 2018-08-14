/*
* i3logix Code Challenge
* 
* Please refer to the README.md for challenge questions and complete your challenge below.
*/
// Write some code that evolves generations through the "game of
// life". The input will be a game board of cells, either alive (1) or dead
// (0).

// The code should take this board and create a new board for the
// next generation based on the following rules:
// 1) Any live cell with fewer than two live neighbours dies (underpopulation)
// 2) Any live cell with two or three live neighbours lives on to
// the next generation (survival)
// 3) Any live cell with more than three live neighbours dies
// (overcrowding)
// 4) Any dead cell with exactly three live neighbours becomes a
// live cell (reproduction)


const cells = 10


//creates a two dimensional grid with random values of either 1 or 0
function getRandomGrid() {
    const grid = new Array(cells)
    
    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(cells)
        for (let j = 0; j < grid.length; j++) {
            grid[i][j] = Math.floor(Math.random() * 2)
        }
    }
    console.log(grid)
    return grid
}


//two dimensional loop over the grid
function getNextGeneration(grid) {
    let newGrid = new Array(grid.length)
    
    for (let i = 0; i < grid.length; i++) {
        newGrid[i] = new Array(grid.length)
        for (let j = 0; j < newGrid[i].length; j++) {
            const value = grid[i][j]
            const neighbors = countNeighbors(grid, i, j)

            if (value === 0 && neighbors === 3) {
                newGrid[i][j] = 1
            } else if (
                (value === 1) &&
                (neighbors < 2 || neighbors > 3)
            ) {
                newGrid[i][j] = 0
            } else {
                newGrid[i][j] = value
            }
        }
    }
    console.log(newGrid)
    return newGrid
}

//using our two dimensional loop, we count neighbors
function countNeighbors(grid, x, y) {
    let count = 0

    const rowsLength = grid.length
    const columnsLength = grid[0].length

    for(let i = -1; i < 2; i++) {
        for(let j = -1; j < 2; j++) {
            const row = (x + i + rowsLength) % rowsLength
            const column = (y + j + columnsLength) % columnsLength
            
            count += grid[row][column]
        }
    }
    count -= grid[x][y]
    return count
}

function update(){
    getNextGeneration(getRandomGrid())
    //window.setInterval(update, 1000)
}
    

update()