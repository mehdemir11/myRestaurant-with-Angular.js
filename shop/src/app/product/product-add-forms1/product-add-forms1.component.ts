import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService, ProductService],
})
export class ProductAddForms1Component implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}
  model: Product = new Product();
  categories: Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  add(form: NgForm) {
    this.productService.addProduct(this.model).subscribe((data) => {
      this.alertifyService.success('Add process is succeded for ' + data.name);
    });
  }
}
