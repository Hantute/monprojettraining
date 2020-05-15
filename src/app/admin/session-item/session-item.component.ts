import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {

  //name = "Formation Web";
  alignement = "right";
  couleur = "red";
  //@Input() name: String;
  @Input() session: any;
  @Output() participantsChange = new EventEmitter<any>();

  constructor(private sessionItemService: FakeSessionItemService) { }

  ngOnInit(): void {
  }

  inscrire() {
    console.log("Nouvelle Inscription .... ");
    //this.session.name = "Formation Web spécialisée";
    this.session.participants++;
    console.log(this.session.participants + " Participants");
    this.participantsChange.emit({
      value: this.session.participants // Permet d'être une données, un evenements
    });
    if (this.session.participants >= 20) {
      this.session.isCompleted = true;
    }
  }

  onDelete() {
    console.log(this.session);
    this.sessionItemService.delete(this.session);
  }
}
