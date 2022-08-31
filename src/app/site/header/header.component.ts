import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'headers',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('navMenu') navMenu: ElementRef;
  @ViewChild('nav') nav: ElementRef;
  @ViewChild('scrollUp') scrollUp: ElementRef;
  @ViewChild('themeButton') themeButton: ElementRef;
  @ViewChild('colorButton') colorButton: ElementRef;
  @ViewChild('pulseButton') pulseButton: ElementRef;


  readonly darkTheme = 'dark-theme';
  readonly iconTheme = 'uil-sun';
  readonly diceList = ['uil-dice-six', 'uil-dice-five', 'uil-dice-four', 'uil-dice-three', 'uil-dice-two', 'uil-dice-one'];
  pulseIntervalId: any;

  constructor() { }

  ngAfterViewInit(): void {
    /* CHANGE BACKGROUND HEADER */
    let th = this;
    window.addEventListener('scroll', () => {
      // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
      if (window.scrollY >= 80) th.nav.nativeElement.classList.add('scroll-header');
      else th.nav.nativeElement.classList.remove('scroll-header');
    });

    /* SHOW SCROLL UP */
    window.addEventListener('scroll', () => {
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-Up class
      if (window.scrollY >= 560) th.scrollUp.nativeElement.classList.add('show-scroll');
      else th.scrollUp.nativeElement.classList.remove('show-scroll');
    })

    /* SCROLL SECTIONS ACTIVE LINK */
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset

      sections.forEach((current: any) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
      });
    });

    /* DARK LIGHT THEME */
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      this.themeButton.nativeElement.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
    }
  }

  addShowMenu() {
    this.navMenu.nativeElement.classList.add('show-menu');
  }

  removeShowMenu() {
    this.navMenu.nativeElement.classList.remove('show-menu');
  }

  linkAction() {
    // When we click on each nav__link, we remove the show-menu class
    this.navMenu.nativeElement.classList.remove('show-menu');
  }

  // We obtain the current theme that the interface has by validating the dark-theme class
  getCurrentTheme(): string {
    return document.body.classList.contains(this.darkTheme) ? 'dark' : 'light';
  }
  // We obtain the current theme that the interface has by validating the dark-theme class
  getCurrentIcon(): string {
    return this.themeButton.nativeElement.classList.contains(this.iconTheme) ? 'uil-moon' : 'uil-sun';
  }

  // Activate / deactivate the theme manually with the button
  changeTheme() {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(this.darkTheme);
    this.themeButton.nativeElement.classList.toggle(this.iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', this.getCurrentTheme());
    localStorage.setItem('selected-icon', this.getCurrentIcon());
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  removeDices() {
    this.diceList.forEach((dice: string) => {
      this.colorButton.nativeElement.classList.remove(dice);
    });
  }

  // Roll dice 
  changeColor() {
    this.removeDices();
    this.colorButton.nativeElement.classList.add(this.diceList[this.getRandomInt(5)]);
    document.documentElement.style.setProperty('--hue-color', this.getRandomInt(360) + "");
  }

  pulseColor() {
    // this.pulseButton.nativeElement.classList.add();
    this.pulseIntervalId = setInterval(() => {
      document.documentElement.style.setProperty('--hue-color', (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--hue-color')) + 1) + "");
    }, 50);
  }

  stopPulseColor() {
    // this.pulseButton.nativeElement.classList.add();
    clearInterval(this.pulseIntervalId);
    this.pulseIntervalId = null;
  }

}
