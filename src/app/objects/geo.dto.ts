export class GeoDto {
  lat: string;
  lng: string;

  constructor(data?: any) {
    data = data || {};
    this.lat = data.lat;
    this.lng = data.lng;
  }
}
