import { Directive, ElementRef, Renderer2, Input,HostListener } from '@angular/core';

@Directive({
    selector: '[appGridItemImage]',
})
export class GridItemImageDirective {
    @Input() appGridItemImage = '2rem';
    @Input() fitMode = "cover"
    constructor(private elr:ElementRef, private rd2:Renderer2){
     
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.rd2.setStyle(this.elr.nativeElement,'grid-area','image')
        this.rd2.setStyle(this.elr.nativeElement,'width',this.appGridItemImage)
        this.rd2.setStyle(this.elr.nativeElement,'height',this.appGridItemImage)
        this.rd2.setStyle(this.elr.nativeElement,'object-fit',this.fitMode)
    }
    @HostListener("click",["$event.target"])
    handleClick(ev){
        console.log(ev)
    }
 }