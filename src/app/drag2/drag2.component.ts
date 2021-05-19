import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag2',
  templateUrl: './drag2.component.html',
  styleUrls: ['./drag2.component.scss']
})
export class Drag2Component implements OnInit {
  inBounds = false;
  myBounds = false;
  edge = {
    top: true,
    bottom: false,
    left: true,
    right: true
  };
  constructor() { }

  ngOnInit(): void {
  }
  
  checkEdge(event:any) {
    this.edge = event;
    console.log('edge:', event);
  }

  onDragBegin(event:any){
    console.log('onDragBegin:', event);
  }

  onDragEnd(event:any){
    console.log('onDragEnd:', event);
  }

  onMoving(event:any){
    console.log('onMoving:', event);
  }
  onMoveEnd(event:any){
    console.log('onMoveEnd:', event);
  }

}
