import { newArray } from "@angular/compiler/src/util";
import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { NgxMoveableComponent } from "ngx-moveable";
import { NgxSelectoComponent } from "ngx-selecto";

@Component({
    selector: 'app-root',
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    @ViewChild('moveable', { static: false })
  moveable: NgxMoveableComponent = new NgxMoveableComponent;
    @ViewChild('selecto', { static: false })
  selecto!: NgxSelectoComponent;
    cubes: any[] = [];
    targets = [];
    frameMap = new Map();
    frame = {
      translate: [0,0],
  };
    constructor(){
      this.cubes = [];
    }
    ngOnInit() {
       let cubes1 = [];

        for (let i = 0; i < 2; ++i) {
          cubes1.push(i);
        }
       this.cubes = cubes1;
    }
    onClickGroup(e:any) {
        console.log('onClickGroup', e)
        this.selecto.clickTarget(e.inputEvent, e.inputTarget);
    }
    onMoveableDragStart(e:any) {
        console.log('onMoveableDragStart', e)
        const target = e.target;
    
        if (!this.frameMap.has(target)) {
            this.frameMap.set(target, {
                translate: [0, 0],
            });
        }
        const frame = this.frameMap.get(target);
        console.log('frame', e)
        e.set(frame.translate);
    }
    onDrag(e:any) {
        console.log('onDrag', e)
        const target = e.target;
        const frame = this.frameMap.get(target);
    
        frame.translate = e.beforeTranslate;
        target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px)`;
    }

    onDragEnd(e:any){
        console.log('onDragEnd', e)
    }
    onDragGroupStart(e:any) {
        e.events.forEach((ev:any) => {
            const target = ev.target;
    
            if (!this.frameMap.has(target)) {
                this.frameMap.set(target, {
                    translate: [0, 0],
                });
            }
            const frame = this.frameMap.get(target);
    
            ev.set(frame.translate);
        });
    }
    onDragGroup(e:any) {
        e.events.forEach((ev:any) => {
            const target = ev.target;
            const frame = this.frameMap.get(target);
    
            frame.translate = ev.beforeTranslate;
            target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px)`;
        });
    }
    onDragStart(e:any) {
        console.log('onDragStart', e)
        const target = e.inputEvent.target;
        // if (
        //     this.moveable.isMoveableElement(target)
        //     ||  this.targets.some(t => t === target || t.contains(target))
        // ) {
        //     e.stop();
        // }
    }
    onSelectEnd(e:any) {
        this.targets = e.selected;
    
        if (e.isDragStart) {
            e.inputEvent.preventDefault();
    
            setTimeout(() => {
                this.moveable.ngDragStart(e.inputEvent);
            });
        }
    }

    onResizeStart(e:any) {
      e.setOrigin(["%", "%"]);
      e.dragStart && e.dragStart.set(this.frame.translate);
  }
  onResize(e:any) {
      const beforeTranslate = e.drag.beforeTranslate;
  
      this.frame.translate = beforeTranslate;
      e.target.style.width = `${e.width}px`;
      e.target.style.height = `${e.height}px`;
      e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
  }
}