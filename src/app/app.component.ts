import { Component } from '@angular/core';
import { NodeService } from './services/node.service';
import {Node} from './Models/node.model';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tree-node-web-ui';
  treeControl = new NestedTreeControl<Node>(n => n.children);
  dataSource = new MatTreeNestedDataSource<Node>();
  nodes: Node[] = [];
  modelObj: Node;


  saveButton: object = { content: 'Save', cssClass: 'e-outline'};
  cancelButton: object = { content: 'Cancel', cssClass: 'e-outline'};

  constructor(private service: NodeService) {}

  ngOnInit(): void {
    this.service.get().subscribe((data: any[])=>{
      
      for(let i = 0; i < data.length; ++i) {
        const newNode = 
        new Node(data[i].id, data[i].name, data[i].description, data[i].parent, data[i].read_only)
          this.nodes.push(newNode);
      }
      
      for(let i = 0; i < this.nodes.length; ++i) {
        if(this.nodes[i].parent != 0){
          this.nodes.filter(n => n.id == this.nodes[i].parent)[0].children.push(this.nodes[i]);
        }
      }

      this.dataSource.data = this.nodes.filter(n => n.parent == 0);
    }); 
  }

  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;
}
