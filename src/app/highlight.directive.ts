import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer:Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red')
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green')
  }

   @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }
}
