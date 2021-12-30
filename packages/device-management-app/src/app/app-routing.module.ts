import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { ListDevicesComponent } from './components/list-devices/list-devices.component';

const routes: Routes = [
  { path: '', redirectTo: 'devices', pathMatch: 'full' },
  { path: 'devices', component: ListDevicesComponent },
  { path: 'add-devices', component: AddDeviceComponent },
  { path: 'categories', component: ListCategoriesComponent },
  { path: 'add-categories', component: AddCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
