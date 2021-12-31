import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category/category.model';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];

  categories: Category[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.retrieveCategories();
  }

  retrieveCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveCategories();
  }

  deleteCategory(id: any): void {
    this.categoryService.delete(id).subscribe({
      next: () => {
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }
}
