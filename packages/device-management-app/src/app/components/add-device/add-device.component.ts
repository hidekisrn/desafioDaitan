import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Device } from 'src/app/models/device/device.model';
import { DeviceService } from 'src/app/services/device/device.service';
import { CategoryService } from 'src/app/services/category/category.service';

interface CategoryOption {
  value: any;
  viewValue: string | undefined;
}

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css'],
})
export class AddDeviceComponent implements OnInit {
  device: Device = {
    category_id: '',
    color: '',
    partNumber: undefined,
  };

  submitted = false;

  categoryOptionHasError = true;

  categoriesOptions: CategoryOption[];

  constructor(
    private deviceService: DeviceService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.retrieveCategories();
  }

  retrieveCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this.categoriesOptions = data.map((category) => ({
          value: category.id,
          viewValue: category.name,
        }));
      },
      error: (e) => console.error(e),
    });
  }

  saveDevice(): void {
    const data = {
      category_id: this.device.category_id,
      color: this.device.color,
      partNumber: this.device.partNumber,
    };

    this.deviceService.create(data).subscribe({
      next: (res) => {
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newDevice(): void {
    this.submitted = false;
    this.device = {
      category_id: '',
      color: '',
      partNumber: undefined,
    };
  }

  redirectToDevices(): void {
    this.router.navigate(['/devices']);
  }
}
