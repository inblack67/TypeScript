export interface Project{
    frontend: string,
    backend: string,
    deployed: boolean,
    devopsUsed: string[] | string
    displayTechs: () => void,
    isDeployed: (isIt: boolean) => boolean
}
