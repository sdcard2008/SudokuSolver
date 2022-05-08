export function getEmptyRoomsIndex(emptySudoku) {
    let output = []
    for (let i = 0; i < emptySudoku.length ; i++) {
        for (let j = 0; j < emptySudoku[i].length ; j++) {
            if (emptySudoku[i][j] == "x") {
                output.push([i,j])
            }
        }
    }
    return output

}

// emptySudoku[0][1]
// emptySudoku[0][2]... so on

export function returnColumnForm(emptySudoku , grids) {
    let output = []


    for (let i = 0; i < grids ; i++) {
        for (let j = 0; j < emptySudoku.length ; j++) {
            if (output[i] == undefined) {
                output[i] = []
            }

            output[i].push(emptySudoku[j][i])
        }
    }

    return output
}

// grids : 1... 4
// emptySudoku : 0..3

// emptySudoku[0][0]
// emptySudoku [1][] .. so on