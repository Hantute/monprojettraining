import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'training-app'; // il s'agit du titre de l'application
  // session_name = "Formation Web Avancée"; // On définit une variable globale
  nbpart: number = 0;
  // on crée une classe firstSession qu'on va exporter dans les classes filles et sur le code html
  firstSession = {
    id: 1,
    name: 'Formation Web Avancée',
    track: 'MEAN Stack',
    date: new Date('2020-05-14'),
    duree: 3,
    local: 'Lyon',
    participants: 0
  };

  nbrParticipantsChange(event) {
    this.nbpart = event.value;
  }

}
