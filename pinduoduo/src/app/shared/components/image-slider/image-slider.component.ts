import { Component, OnInit ,Input ,ViewChild,ElementRef,Renderer2, ChangeDetectionStrategy} from '@angular/core';
import { ImageSlider } from '../../domain';


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders : ImageSlider[] = [];
  @Input() scrollHeight = "150px";
  @Input() intervalBySeconds = 2;
  @ViewChild("ImageSlider",{static:true}) imgSlider:ElementRef;
  selectedIndex = 0;
  intervalId ;
  // @ViewChildren("img") imgs : QueryList<ElementRef>;
  constructor(private rd2 : Renderer2) { }

  ngOnInit() {
    // console.log("初始化",this.imgSlider)
  }
  ngAfterViewInit(): void {
    /* 
    内存泄漏 
    */
   if(this.intervalBySeconds<=0){
    return;
   }else{
    this.intervalId = setInterval(()=>{
      this.rd2.setProperty(this.imgSlider.nativeElement,"scrollLeft",((this.getIndex(++this.selectedIndex) % this.sliders.length) *this.imgSlider.nativeElement.scrollWidth/this.sliders.length))
    },this.intervalBySeconds * 1000)
   }
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }
  /* 数组越界的方法 */
  getIndex(idx : number): number {
    return idx >=0 ? idx % this.sliders.length : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }
  handleScroll(ev){
    const ratio =  ev.target.scrollLeft * this.sliders.length / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio)
   
  }
}
