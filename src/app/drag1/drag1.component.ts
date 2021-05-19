
import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { NgxMoveableComponent } from "ngx-moveable";
import { NgxSelectoComponent } from "ngx-selecto";

@Component({
    selector: 'app-drag1',
    templateUrl: './drag1.component.html',
    styleUrls: ['./drag1.component.scss']
})
export class Drag1Component implements OnInit {
    @ViewChild('moveable', { static: false })
    moveable: NgxMoveableComponent = new NgxMoveableComponent;
    @ViewChild('selecto', { static: false })
    selecto!: NgxSelectoComponent;
    cubes: any[] = [];
    targets = [];
    frameMap = new Map();
    frame = {
        translate: [0, 0],
    };

    pageList = [
        {
            id: 1
        },
        {
            id: 2
        },
    ]

    dragItem = [
        {
            id: 1,
            text: 'sign',
            pageId: 1
        },
        {
            id: 2,
            text: 'stamp',
            pageId: 2
        },
    ]
    constructor() {
        this.cubes = [];
    }
    ngOnInit() {
        let cubes1 = [];

        for (let i = 0; i < 2; ++i) {
            cubes1.push(i);
        }
        this.cubes = cubes1;
    }
    onClickGroup(e: any) {
        console.log('onClickGroup', e)
        this.selecto.clickTarget(e.inputEvent, e.inputTarget);
    }
    onMoveableDragStart(e: any) {
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
    onDrag(e: any) {
        console.log('onDrag', e)
        const target = e.target;
        const frame = this.frameMap.get(target);

        frame.translate = e.beforeTranslate;
        target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px)`;
        console.log('target.style.transform : ', target.style.transform );
    }

    onDragEnd(e: any) {
        console.log('onDragEnd', e)
    }
    onDragGroupStart(e: any) {
        console.log('onDragGroupStart', e)
        e.events.forEach((ev: any) => {
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
    onDragGroup(e: any) {
        console.log('onDragGroup', e)
        e.events.forEach((ev: any) => {
            const target = ev.target;
            const frame = this.frameMap.get(target);

            frame.translate = ev.beforeTranslate;
            target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px)`;
        });
    }
    onDragStart(e: any) {
        console.log('onDragStart', e)
        const target = e.inputEvent.target;
        if (
            this.moveable.isMoveableElement(target)
            || this.targets.some(t => t === target)
        ) {
            e.stop();
        }
    }
    onSelectEnd(e: any) {
        console.log('onSelectEnd', e)
        this.targets = e.selected;

        if (e.isDragStart) {
            e.inputEvent.preventDefault();

            setTimeout(() => {
                this.moveable.ngDragStart(e.inputEvent);
            });
        }
    }

    onResizeStart(e: any) {
        e.setOrigin(["%", "%"]);
        e.dragStart && e.dragStart.set(this.frame.translate);
    }
    onResize(e: any) {
        const beforeTranslate = e.drag.beforeTranslate;

        this.frame.translate = beforeTranslate;
        e.target.style.width = `${e.width}px`;
        e.target.style.height = `${e.height}px`;
        e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
    }
}
