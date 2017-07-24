import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions, Http } from '@angular/http';

import { HomeModule } from './home/home.module';
import { RoomProfileModule } from './room-profile/room-profile.module';
import { SharedModule } from './shared/shared.module';

import { RoomService } from './shared/services/rooms/room.service';
import { AuthService } from './shared/auth/auth.service';
import { ModalService } from './shared/services/modal/modal.service';
import { UserService } from './shared/services/users/user.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SearchComponent,
  ],
  imports: [
    HomeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    RoomProfileModule
  ],
  providers: [BaseRequestOptions, RoomService, AuthService, ModalService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
