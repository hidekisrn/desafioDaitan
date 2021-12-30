import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.css'],
})
export class ListDevicesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'category', 'color', 'partNumber'];

  devices: Device[];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.retrieveDevices();
  }

  retrieveDevices(): void {
    this.deviceService.getAll().subscribe({
      next: (data) => {
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