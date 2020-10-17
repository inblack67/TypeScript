enum Intro{
    name,
    email,
    education,
    profession
}

interface Person<T>{
    id: number | string,
    intro: Intro,
}

const me: Person = {
    id: 1,
    intro: Intro.name
}