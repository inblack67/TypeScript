// structure classes or objects
interface Project{
    frontend: string,
    backend: string,
    deployed: boolean,
    devopsUsed: string[] | string
    displayTechs: () => void,
    isDeployed: (isIt: boolean) => boolean
}

const NextOverflow: Project = {
    frontend: 'Next.js',
    backend: 'GraphQL',
    deployed: false,
    devopsUsed: ['Indefinite'],
    displayTechs: () => console.log(''),
    isDeployed: (isIt = false) => isIt
}

const introduceNextOverflow = (next: Project): void => {
    console.log(next)
    console.log(next.isDeployed(false))
}

introduceNextOverflow(NextOverflow);