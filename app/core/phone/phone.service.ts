import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import IPhone from "../../interfaces/IPhone";
import IPhoneDetail from "../../interfaces/IPhoneDetail";

@Injectable()
export class Phone {
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  query(): Observable<IPhone[]> {
    return this.http.get<IPhone[]>(`phones/phones.json`);
  }

  get(id: string): Observable<IPhoneDetail> {
    return this.http.get<IPhoneDetail>(`phones/${id}.json`);
  }
}

export const PhoneServiceName: string = 'Phone';
