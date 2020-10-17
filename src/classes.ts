class Queue{
    elements: number[];
    size: number;
    private secret: string;
    readonly tip: string;
    constructor() {
        this.elements = [];
        this.size = this.elements.length;
        this.secret = 'you dont know node';
        this.tip = 'make a lot of projects';
    }
    enqueue(el: number){
        this.elements.push(el);
    }
    dequeue(): number{
        return this.elements.shift()!; // will not be undefined
    }
    display(): void{
        console.log(this.elements)
    }
}

const que = new Queue();
que.enqueue(10);
que.enqueue(20);
que.enqueue(30);
que.dequeue();
que.display();
console.log(que.tip);