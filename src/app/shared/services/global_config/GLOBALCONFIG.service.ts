import { Injectable } from '@angular/core';

@Injectable()
export class GLOBALCONFIGService {
  setHttpMock = false;

  usemock() {
    return this.setHttpMock;
  }

}
