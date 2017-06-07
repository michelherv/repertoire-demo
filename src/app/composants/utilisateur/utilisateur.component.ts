import { Component, Input } from '@angular/core';
import { UserDto } from '../../objects';


@Component({
  selector: 'model-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {
  @Input() user: UserDto;

  constructor() { }
}
