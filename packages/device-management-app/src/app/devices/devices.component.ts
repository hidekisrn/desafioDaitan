import { Component, OnInit } from '@angular/core';

type DevicesProps = {
  id: string;
  category: string;
  color: string;
  partNumber: number;
};

const devices: DevicesProps[] = [
  { id: '1', category: 'teste1', color: 'white', partNumber: 1 },
  { id: '2', category: 'teste2', color: 'blue', partNumber: 2 },
  { id: '3', category: 'teste3', color: 'green', partNumber: 3 },
  { id: '4', category: 'teste4', color: 'black', partNumber: 4 },
];

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent {
  displayedColumns: string[] = ['id', 'category', 'color', 'partNumber'];
  dataSource = devices;
}
