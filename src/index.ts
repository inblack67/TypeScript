// unions
const arr: (string|number|boolean)[] = ['js', 10, true]
console.log(arr)

let id: string|number = 1;
id = '2';
console.log(id)

// explicit objects
let player: {
    name: string,
    id: string|number,
    score: number,
    champ: boolean
}

player = {
    name: 'ronaldo',
    id: 1,
    score: 10,
    champ: true
}

// implicit type
let novel:{
    title: string,
    id?: any
    author?: any
}

novel = {
    title: 'X'
}

console.log(novel)

let greet: Function;
greet = (): void => {
     console.log(`hello`)
}

// type alias
type StringOrNumber = string | number;
const uuid: StringOrNumber = 1 || '1';

type project = {
    title: string,
    id: string | number,
    url: string,
    stack: string[] | string
}

const projects = (pros: project[]) => {
    console.log(pros)
}

const data = [{
    title: 'Blogs',
    id: 1,
    url: 'vercel.com',
    stack: ['next.js']
}];

projects(data);

// function signature
let addProject: (pro: project) => project;
addProject = (pro) => pro;
addProject({
    title: 'Blogs',
    id: 1,
    url: 'vercel.com',
    stack: ['next.js']
})