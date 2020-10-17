// reusable blocks of code
const addId = <T>(id: T) => ({id, name: 'me'})
addId({}) // whatever type we specify when we call it
addId('') 

interface Dev<T>{
    name: string,
    id: T
}

const inblack67: Dev<String|Number> = {
    name: 'Aman',
    id: '1' || 2
}