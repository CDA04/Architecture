
import { addition } from "./types/Person"

let a: number = 1

console.log('hello', a)

let b: number = 1

b = 100

function add(a: number, b: number): number {

    return a + b
}


add(1, add(2, 2))

let nombres: number[] = [1, 2, 3, 4];

type Address = string;

interface Student {
    name: string;
    address: Address;
    notes?: number[];
}


const u: Student = {
    name: "Alan",
    address: "Paris",
    notes: [11, 13, 15, 19],
}

// typage générique nous allons le voir plus loing
type Pair<T> = [T, T];

// tu fixes le type T = string
const p: Pair<string> = ["a", "b"]

const q: Pair<number[]> = [[1, 2], [3, 4]]


// Add peut maintenant être défini avec le type addition
const Add: addition = (a, b) => {

    return a + b
}

// dans les cheffrons sont définis les types génériques
function shuffleElement<T, G>( n : T, m : G) : T {

    return n
}