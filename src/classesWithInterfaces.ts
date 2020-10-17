import { Project } from './interfaces/Project';

class Portfolio{
    projects: Project[];
    readonly author: string;
    constructor() {
        this.projects = [];
        this.author = 'Aman Bhardwaj'
    }
    addProject(pro: Project){
        this.projects.push(pro);
    }
    displayAuthor(){
        console.log(this.author);
    }
    displayProjects(){
        this.projects.forEach(pro => console.log(pro.backend, pro.frontend));
    }
}

const NextOverflow: Project = {
    frontend: 'Next.js',
    backend: 'GraphQL',
    deployed: false,
    devopsUsed: ['Indefinite'],
    displayTechs: () => console.log(''),
    isDeployed: (isIt = false) => isIt
}

const port1 = new Portfolio();
port1.addProject(NextOverflow);
port1.displayAuthor();
port1.displayProjects();