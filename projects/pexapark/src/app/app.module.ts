import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { WindFarmModule } from "./features/wind-farm/wind-farm.module";
import { WindFarmSelectComponent } from "./features/wind-farm/wind-farm-select/wind-farm-select.component";
import { WindFarmService } from "./features/wind-farm/wind-farm.service";

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule,
    WindFarmModule
  ],
  declarations: [AppComponent, WindFarmSelectComponent],
  providers: [WindFarmService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
