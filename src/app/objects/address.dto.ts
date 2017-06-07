import { GeoDto } from './geo.dto';
import { CompanyDto } from './company.dto';

export class AddressDto {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoDto;
  phone: string;
  company: CompanyDto;

  constructor(data?: any) {
    data = data || {};
    this.street = data.street;
    this.suite = data.suite;
    this.city = data.city;
    this.zipcode = data.zipcode;
    this.geo = new GeoDto(data.geo);
    this.phone = data.phone;
    this.company = new CompanyDto(data.company);
  }
}
