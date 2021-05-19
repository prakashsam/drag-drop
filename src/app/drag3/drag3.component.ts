import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag3',
  templateUrl: './drag3.component.html',
  styleUrls: ['./drag3.component.scss']
})
export class Drag3Component implements OnInit {
  dragItem = [
    {
    id: 1,
    text: 'sign',
    docId : 10
  },
  {
    id: 2,
    text: 'stamp',
    docId : 10
  },
]
  constructor() { }

  ngOnInit(): void {
  }

  drag_start(event:any) {
    console.log('drag_start',event)
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("Text", str);
  }

  drop(event:any) {
    console.log('drop: ', event);
    var offset = event.dataTransfer.getData("Text").split(',');
    var dm:any  = document.getElementById(offset[2]);
    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
  }
  drag_over(event:any) {
   // console.log('drag_over: ', event);
    event.preventDefault();
    return false;
  }

}
