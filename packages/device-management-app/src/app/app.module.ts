import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { ListDevicesComponent } from './components/list-devices/list-devices.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDeviceComponent,
    ListDevicesComponent,
    AddCategoryComponent,
    ListCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
