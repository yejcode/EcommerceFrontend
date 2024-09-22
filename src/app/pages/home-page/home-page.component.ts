import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductComponent, ProductComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  products: any[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetchAllProducts(
      (response) => {
        console.log(response);
        this.products = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
