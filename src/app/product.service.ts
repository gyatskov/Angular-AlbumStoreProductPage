import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Album } from './album';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  private _albumUrl = "../assets/album.json";

  getAlbum(id: number) : Observable<Album> {
      return this._http.get(this._albumUrl).pipe(map( (response) => <Album>response.json()));
  }
}
