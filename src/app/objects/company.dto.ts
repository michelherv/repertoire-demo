export class CompanyDto {
  name: string;
  catchPhrase: string;
  bs: string;

  constructor(data?: any) {
    data = data || {};
    this.name = data.name;
    this.catchPhrase = data.catchPhrase;
    this.bs = data.bs;
  }
}
