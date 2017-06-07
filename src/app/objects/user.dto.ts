import { AddressDto } from './address.dto';


export class UserDto {
  id: number;
  enabled: boolean;
  name: string;
  username: string;
  email: string;
  website: string;
  address: AddressDto;


  constructor(data?: any) {
    data = data || {};
    this.id = data.id;
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.website = data.website;
    this.address = new AddressDto(data.address);
  }
}
