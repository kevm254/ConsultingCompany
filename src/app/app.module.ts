import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WhoWeAreComponent } from './panels/who-we-are/who-we-are.component';
import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { GeneralInfoComponent } from './panels/general-info/general-info.component';
import { ButtonComponent } from './components/button/button.component';
import { ProfileBoxComponent } from './components/profile-box/profile-box.component';
import { ContactUsComponent } from './panels/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WhoWeAreComponent,
    CardComponent,
    CardContainerComponent,
    GeneralInfoComponent,
    ButtonComponent,
    ProfileBoxComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
