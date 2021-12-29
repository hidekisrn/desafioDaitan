import { Component, OnInit } from '@angular/core';

type CategoryProps = {
  id: string;
  name: string;
};

const categories = [
  { id: '1', name: 'categoria1' },
  { id: '2', name: 'categoria2' },
  { id: '3', name: 'categoria3' },
];

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = categories;
}
