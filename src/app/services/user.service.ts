import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserDto } from '../objects';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UserService {
  public static URL = 'http://localhost:3000/users';

  constructor(
    public http: Http
  ) { }

  getAll(): Observable<UserDto[]> {
    return this.http.get(UserService.URL)
      .map(response => response.json())
      .map(response => response.map(item => new UserDto(item)));
  }

  get(id: number): Observable<UserDto> {
    return this.http.get(UserService.URL + '/' + id)
      .map(response => response.json())
      .map(response => new UserDto(response));
  }

  update(user: UserDto): Observable<UserDto> {
    return this.http.put(UserService.URL + '/' + user.id, user)
      .map(response => response.json())
      .map(response => new UserDto(response));
  }

  remove(id: number): Observable<void> {
    return this.http.delete(UserService.URL + '/' + id)
      .map(reponse => { });
  }
}
