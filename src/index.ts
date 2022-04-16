// Basic Types
// Number
let id: number = 5;

// Strings
let author: string = "donskilful";

// Boolean
let isDeveloper: boolean = true;

// Any
let x: any = "anything";
x = 3;
// X is set to a type of any therefore we could actually reassign any value type to it without any problems

// we could as well declare any typed variable without passing a value then later we could assign a value to it see example below
let firstName: string;
let lastName: string;
let age: number;

firstName = "don"; // in this case you cannot pass any other data type to firstName other than a string same applie to lastName and age
lastName = "skilful";
age = 26;

// Arrays

// Array of numbers
let ids: number[] = [1, 4, 5, 1];

// Array of strings
let names: string[] = ["matthew", "don", "joe"];

// Array of any data type
let arr: any[] = [1, true, "three"];

// Tuple
let person: [number, boolean, string] = [12, true, "don"]; // for a tuple you have to specify which data type needs to be at which position unlike the any

// Tuple array
let employee: [number, string][] = [
  // in a tuple array you need to add the [] at the end of the type and it accepts an array with the corresponding types at each positions inside the array
  [1, "man"],
  [2, "rice"],
];

// Union
let prodId: number | string = "qa1234wbsdgd_bskd"; // When you want a variable to hold more than one data type you could use a union
// prodId can now actually hold either strings or numbers

// Enum
enum Direction1 {
  top = 6,
  right,
  bottom,
  left,
}

// console.log(Direction1.left);

enum Direction2 {
  top = "UP",
  right = "RIGHT",
  bottom = "DOWN",
  left = "LEFT",
}

// console.log(Direction2.left);

// Object
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "don",
}; // this is one way we could also set types for an object but i looks messy

// another way is by defining the type seperately and then using it on the object directly
type User = {
  id: number;
  name: string;
};

const user1: User = {
  id: 2,
  name: "Skilful",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number; // in Type assertion we could have a variable hold any data type we want at the begining and then later change it to a particular data type
// and we can do that in two different ways
// * 1 we could use the angle bracket
// * we could use the as keyWord

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}
// console.log(addNum(4, 9));

// when using typescript in fuctions you also need to specify the types of data that should be passed in as parameter and if the function returns
// a value it is also important to state the return type of the function too else if the fuction does not return a value just leave its return
// type as void

// Void
function send(message: string | number) {
  console.log(message);
}

// send("I am here already");

// Interfaces
interface UserInterface {
  readonly id: number; // with interface we can have readonly properties
  name: string;
  age?: number; // always use the question mark sign to n=indicate if a variable is optional
}
// the interface typing uses the interface keyword without the = sign

const user2: UserInterface = {
  id: 2, // this id cannot be mutated since it is a readonly property as defined by its interface above
  name: "Skilful",
};

// interfaces are usually used for objects as it does not work with primitives

// Interface with functions
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
// console.log(add(2, 7));


// We could also have an interface for a class
interface PersonInterface {
  id: number;
  name: string;
  isDeveloper?: boolean
  occupation: string

  register(): string // we can also incude methods and specify the type of data they return

}

/*  in order for us to use the interface we just created for the person class we cannot just do the regular appending 

  eg 

  class Person: PersonInterface {
   id
   name
 }

 instead we make use of the implements keyword as shown below

class Person implements PersonInterface { 
    protected id
    private name
    isDeveloper?
    occupation

    constructor(id, name, isDeveloper, occupation){
        this.id = id
        this.name = name
        this.isDeveloper = true
        this.occupation = occupation
    }

    register() {
      console.log(`${this.name} has been registered successfully`);
      
    }
}


*/



// Classes
class Person { 
// there is what we call access or data modifiers 
// these variable can be accessed and changed or modified from anywhere within or outside the class but we could also specify if these aaccessed varibles could or should be modifed or not
// by using some keywords in front of them
    protected id: number   // the private and protected variables can only be accessed or modified within the class or and class that is extended from it
    private name: string
    isDeveloper: boolean
    occupation: string

    constructor(id:number, name:string, isDeveloper:boolean, occupation:string){ // Types are always passed in for variables / expected values
        this.id = id
        this.name = name
        this.isDeveloper = isDeveloper
        this.occupation = occupation
    }

    register() {
      console.log(`${this.name} has been registered successfully`);
      
    }
}


const Skilful = new Person(3, 'skilful', true, 'developer')
const Don = new Person(1, 'don', true, 'music director')

Skilful.occupation = 'Athlete' // this is possible because we could actually access and modify the Skilful object 
                        // but there is a way we could actually prevent that if we wand to by using the private keyword

// console.log(Skilful, Don)

// Don.register()  Don is already a new object generated from the Person class, 
               // calling the register method on the Don object which already has a name property makes it possible to log a message which says "don has been registered successfully"


// Extending a class 
class Employee extends Person {
  position: string

  constructor(id:number, name:string, isDeveloper:boolean, occupation:string, position:string) {
    super(id, name, isDeveloper, occupation)
    this.position = position
  }
}

const emply = new Employee(12, 'Don Jazzy', false, 'musician', 'manager')
// console.log(emply);
// emply.register()

// Generics 
function getArray(items:any[]):any[]{
  return new Array().concat(items)
}

let numArray = getArray([1, 3, 5, 7])
let strArray = getArray(['don', 'williams', 'will'])

numArray.push('four') // valid
strArray.push(6) // valid

// Using placeholders

function getArray1<T>(items:T[]):T[]{ // instead of using the any type when you intend to change the data type later it is better to use a placeholder
  return new Array().concat(items)
}

let numArray1 = getArray1<number>([1, 3, 5, 7])
let strArray1 = getArray1<string>(['don', 'williams', 'will'])

// numArray1.push('four') // invalid
// strArray1.push(6) // invalid


