import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device/device.model';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css'],
})
export class AddDeviceComponent implements OnInit {
  device: Device = {
    category: '',
    color: '',
    partNumber: undefined,
  };
  submitted = false;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {}

  saveDevice(): void {
    const data = {
      category: this.device.category,
      color: this.device.color,
      partNumber: this.device.partNumber,
    };

    this.deviceService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newDevice(): void {
    this.submitted = false;
    this.device = {
      category: '',
      color: '',
      partNumber: undefined,
    };
  }
}
