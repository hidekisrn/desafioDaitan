import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device/device.model';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.css'],
})
export class ListDevicesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'category_id', 'color', 'partNumber'];

  devices: Device[];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.retrieveDevices();
    console.log(this.devices);
  }

  retrieveDevices(): void {
    this.deviceService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.devices = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveDevices();
  }
}
