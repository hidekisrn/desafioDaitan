import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from 'src/app/models/category/category.model';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  category: Category = {
    name: '',
  };
  submitted = false;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveCategory(): void {
    const data = {
      name: this.category.name,
    };

    this.categoryService.create(data).subscribe({
      next: (res) => {
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newCategory(): void {
    this.submitted = false;
    this.category = {
      name: '',
    };
  }

  redirectToCategories(): void {
    this.router.navigate(['/categories']);
  }
}
