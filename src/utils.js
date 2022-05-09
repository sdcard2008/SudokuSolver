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

export function fillEmptyRooms(emptySudoku , emptyRooms , columnForm , grid) {
    let possibleNumbers = {}

    for (let i = 0; i < emptyRooms.length ; i++) {
        let currentColumn = columnForm[emptyRooms[i][1]]
        let currentRow = emptySudoku[emptyRooms[i][0]]

        for (let l = 1; l < grid+1 ; l++ ) {
            if (possibleNumbers[emptyRooms[i].join("-")] == undefined) {
                possibleNumbers[emptyRooms[i].join("-")] = []  
            }

            if (currentRow.includes(l) || currentColumn.includes(l)) {
                continue
            }
            possibleNumbers[emptyRooms[i].join("-")].push(l)
        }
    }
    return possibleNumbers
}

// emptyRooms[i][0] = 0..4
 

