import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { GLOBALCONFIGService } from './GLOBALCONFIG.service';

@Injectable()
export class ResthelperService {
  globalHttp = null;
  globalHttpMock = null;

  constructor(private globalconfigService: GLOBALCONFIGService, private http: Http, private httpMock: MockBackend) {
    this.globalHttp = http;
    this.globalHttpMock = httpMock;
  }

  restHelperMockSelector() {
    if (this.globalconfigService.usemock()) {
      return this.globalHttpMock;
    } else {
      return this.globalHttp;
    }
  }

  restHelper(url) {
    return this.restHelperMockSelector().get(url)
      .map(
      (response: Response) => {
        const roomsData = response.json();
        return roomsData;
      }
      );
  }
}
