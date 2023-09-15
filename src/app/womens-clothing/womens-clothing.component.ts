// import { Component, OnInit } from '@angular/core';
// import { DataService } from 'src/app/data.service';

// @Component({
//   selector: 'app-womens-clothing',
//   templateUrl: './womens-clothing.component.html',
//   styleUrls: ['./womens-clothing.component.css']
// })
// export class WomensClothingComponent implements OnInit {
//   productList: any[] = [];
//   currentPage: number = 1; // Current page number
//   itemsPerPage: number = 10; // Number of items to display per page
//   // displayedProducts: any[] = []; // Initialize displayedProducts array

//   constructor(private dataService: DataService) {}

//   ngOnInit(): void {
//     this.dataService.getProducts().subscribe((products: any[]) => {
//       // this.productList = products;
//       this.loadProducts();
//     });
//   }

  // loadProducts() {
  //   try {
  //     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //     const endIndex = startIndex + this.itemsPerPage;
  //     this.productList = this.dataService.getProducts();
  //     this.displayedProducts = this.productList.slice(startIndex, endIndex);
  //     console.log('Displayed products:', this.displayedProducts);
  //   } catch (error) {
  //     console.error('Error loading products:', error);
  //   }
    
  // }

//   changePage(newPage: number) {
//     console.log('Change page to:', newPage);
//     this.currentPage = newPage;
//     this.loadProducts();
//   }

//   getPages(): number[] {
//     const pageCount = Math.ceil(this.productList.length / this.itemsPerPage);
//     return Array.from({ length: pageCount }, (_, i) => i + 1);
//   }

//   // shouldRenderButtons(): boolean {
//   //   return this.productList.length > this.itemsPerPage;
//   // }
// }

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-womens-clothing',
  templateUrl: './womens-clothing.component.html',
  styleUrls: ['./womens-clothing.component.css']
  
})
export class WomensClothingComponent implements OnInit {
  productList: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  minPrice: number | undefined;
maxPrice: number | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((products: any[]) => {
      this.productList = products;
      this.loadProducts();
    });
  }
  

  changePage(newPage: number) {
    this.currentPage = newPage;
    this.loadProducts();
  }
  loadProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.productList = this.productList.slice(startIndex, endIndex);
  }

  getPages(): number[] {
    const pageCount = Math.ceil(this.productList.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }
  filterProducts() {
    if (this.minPrice === undefined && this.maxPrice === undefined) {
      this.loadProducts();
    } else {
      this.productList = this.productList.filter(product => {
        if (this.minPrice !== undefined && product.price < this.minPrice) {
          return false;
        }
        if (this.maxPrice !== undefined && product.price > this.maxPrice) {
          return false;
        }
        return true;
      });
      this.currentPage = 1;
      this.loadProducts();
    }
  }
}
