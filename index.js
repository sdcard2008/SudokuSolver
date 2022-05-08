import { getEmptyRoomsIndex , returnColumnForm} from "./src/utils.js"
//imports ^^
// empty rooms are marked as "x"
let emptySudoku = [
    ["x" , "x" , 4 , "x"] ,
    [4 , "x" , 3 , "x"] ,
    ["x",4,"x" , "3"] ,
    ["x" , 1 , "x" , "x"] 
]
let emptyRooms = getEmptyRoomsIndex(emptySudoku)
let columnForm = returnColumnForm(emptySudoku , 4)






