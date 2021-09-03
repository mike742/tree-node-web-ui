import { Injectable } from '@angular/core';
import {Node} from '../Models/node.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NodeService {
  _server = "https://node-tree-app-01.herokuapp.com/nodes";

  constructor(private httpClient: HttpClient) { }

  get() : Observable<Node[]>  {
    return this.httpClient.get<Node[]>(this._server);
  }

  getCSV() : Observable<Blob>{
    return this.httpClient.get(this._server +'/exportCsv', { responseType: 'blob' });
  }

}
