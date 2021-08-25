import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appThemeSelect]'
})
export class ThemeSelectDirective {

  constructor(private element: ElementRef) {
    const theme = localStorage.getItem('url-theme')  || './assets/css/colors/default-dark.css';
    const URL = `./assets/css/colors/${this.element.nativeElement.getAttribute('data-theme')}.css`;
    if(theme === URL) this.element.nativeElement.classList.add('working');

   }

  @HostListener('click')
  addWorking() {
    document.querySelectorAll('.selector').forEach(el => el.classList.remove('working'));
    this.element.nativeElement.classList.add('working');
  }

}
