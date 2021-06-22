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
  }

}
