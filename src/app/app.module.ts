import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeModule } from './home/home.module';

// Imports for loading & configuing the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/rooms/room-backend/in-memory-data.service';
import { RoomService } from './shared/services/rooms/room-backend/room.service';
import { AuthService } from './auth/auth.service';

import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing-module';
import { RoomProfileComponent } from './room-profile/room-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import { GLOBALCONFIGService } from './shared/services/global_config/GLOBALCONFIG.service';
import { RoomBackendService } from './shared/services/rooms/room-backend/roomBackend.service';
import { ResthelperService } from './shared/services/global_config/resthelper.service';
import { ModalService } from './shared/services/modal/modal.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RoomProfileComponent,
    UserProfileComponent,
    PageNotFoundComponent,
  ],
  imports: [
    HomeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [GLOBALCONFIGService, ResthelperService, RoomBackendService,
    MockBackend, BaseRequestOptions, RoomService, AuthService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
