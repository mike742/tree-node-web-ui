export class Node {
    id: number;
    name: string;
    description: string;
    parent: number;
    read_only: number;
    children: Node[];

    constructor(id: number, name: string, desc: string, parent: number, read_only: number ) {
       this.id = id;
       this.name = name;
       this.description = desc;
       this.parent = parent;
       this.read_only = read_only;
       this.children = [];
    }
}

// id	name	description			parent	read_only