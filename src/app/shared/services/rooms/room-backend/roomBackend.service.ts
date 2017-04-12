import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { ResthelperService } from '../../global_config/resthelper.service';

@Injectable()
export class RoomBackendService {
  constructor(private resthelperService: ResthelperService) {

  }

  getRooms() {
    return this.resthelperService.restHelper('../../../../../restdummy/rooms/all.json');
  }
}
