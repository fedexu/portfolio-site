import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio-site';

  ngAfterViewInit() {
    let doc = document.querySelectorAll('.animate');
    if (doc) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square = entry.target.querySelector('.path');
          if (square) {
            if (entry.isIntersecting) {
              square.classList.add('path-animation');
              if (entry.target.className.includes("parentesis"))
                square.classList.add('path-animation-delay-1');
              if (entry.target.className.includes("arrow-right"))
                square.classList.add('path-animation-delay-2');
              return; // if we added the class, exit the function
            }
            // We're not intersecting, so remove the class!
            square.classList.remove('path-animation');
          }
        });
      });
      doc.forEach(element => {
        observer.observe(element);
      });
    }

    let anchors = [
      document.querySelector('#work'),
      document.querySelector('#resume'),
      document.querySelector('#about-me'),
      document.querySelector('#contact')
    ];

    let menuPath = [
      { key: "work", element: document.querySelector('#side-nav-work .path-side-menu') },
      { key: "resume", element: document.querySelector('#side-nav-resume .path-side-menu') },
      { key: "about-me", element: document.querySelector('#side-nav-about-me .path-side-menu') },
      { key: "contact", element: document.querySelector('#side-nav-contact .path-side-menu') }
    ];

    const observerAnchor = new IntersectionObserver(entries => {
      let shouldAnimate = "";
      anchors.forEach(anch => {
        if (anch && this.checkVisible(anch)) {
          shouldAnimate = anch.id;
        }
      });

      let elementToAnimate = menuPath.find(elem => { return elem.key == shouldAnimate })?.element
      if (elementToAnimate && !elementToAnimate.classList.contains("path-animation-side-menu")) {
        this.removeAnimation(menuPath);
        this.addAnimation(elementToAnimate);
      }

    });

    anchors.forEach(element => {
      if (element)
        observerAnchor.observe(element);
    });

  }

  removeAnimation(menuPath: any) {
    menuPath.forEach((elem: any) => {
      if (elem.element) {
        elem.element.classList.remove('path-animation-side-menu');
        elem.element.classList.add('display-none');
      }
    });
  }

  addAnimation(menuPath: any) {
    menuPath.classList.add('path-animation-side-menu');
    menuPath.classList.remove('display-none');
  }

  checkVisible(elm: any) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
}
