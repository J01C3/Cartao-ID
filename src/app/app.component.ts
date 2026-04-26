import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

declare var AndroidFullScreen: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // Aguarda o app carregar
    setTimeout(() => {
      try {
        if (typeof AndroidFullScreen !== 'undefined') {
          AndroidFullScreen.immersiveMode();
        }
      } catch (e) {
        console.log('Fullscreen não disponível');
      }
    }, 500);
  }

}
