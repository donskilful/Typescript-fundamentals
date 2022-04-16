// Basic Types
// Number
let id: number = 5

// Strings
let author: string = 'donskilful'

// Boolean
let isDeveloper: boolean = true

// Any
let x:any = 'anything'
x = 3
// X is set to a type of any therefore we could actually reassign any value type to it without any problems

// we could as well declare any typed variable without passing a value then later we could assign a value to it see example below
let firstName: string
let lastName: string
let age: number

firstName = 'don' // in this case you cannot pass any other data type to firstName other than a string same applie to lastName and age 
lastName = 'skilful'
age = 26

// Arrays

// Array of numbers
let ids: number[] = [1, 4, 5, 1]

// Array of strings 
let names: string[] = ['matthew', 'don', 'joe']

// Array of any data type
let arr: any[] = [1, true, 'three']

// Tuple
let person: [number, boolean, string] = [12, true, 'don'] // for a tuple you have to specify which data type needs to be at which position unlike the any

// Tuple array
let employee: [number, string][] = [ // in a tuple array you need to add the [] at the end of the type and it accepts an array with the corresponding types at each positions inside the array
    [1, 'man'],
    [2, 'rice']
] 

// Union
let prodId: number | string = 'qa1234wbsdgd_bskd' // When you want a variable to hold more than one data type you could use a union 
                                                  // prodId can now actually hold either strings or numbers

// Enum
enum Direction1 {
    top = 6,
    right,
    bottom,
    left
}

console.log(Direction1.left)

enum Direction2 {
    top = 'UP',
    right = 'RIGHT',
    bottom = 'DOWN',
    left = 'LEFT'
}

console.log(Direction2.left)


// Object
const user: {
    id:number,
    name: string
} = {
    id: 1,
    name: 'don'
} // this is one way we could also set types for an object but i looks messy 


// another way is by defining the type seperately and then using it on the object directly
type User = {
    id: number,
    name: string
}

const user1: User = {
    id: 2,
    name: 'Skilful'
}

// Type Assertion 
let cid:any = 1
// let customerId = <number>cid 
let customerId = cid as number  // in Type assertion we could have a variable hold any data type we want at the begining and then later change it to a particular data type 
                                // and we can do that in two different ways 
                                // * 1 we could use the angle bracket 
                                // * we could use the as keyWord

// Functions 
