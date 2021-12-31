import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device/device.model';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.css'],
})
export class ListDevicesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'color', 'partNumber', 'action'];

  devices: Device[];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.retrieveDevices();
  }

  retrieveDevices(): void {
    this.deviceService.getAll().subscribe({
      next: (data) => {
        this.devices = data;
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveDevices();
  }

  deleteDevice(id: any): void {
    this.deviceService.delete(id).subscribe({
      next: () => {
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }
}
