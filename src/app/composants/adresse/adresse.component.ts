import { Component, Input } from '@angular/core';
import { AddressDto } from '../../objects';


@Component({
  selector: 'model-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent {
  @Input()
  address: AddressDto;

  constructor() { }
}
