import { Component } from '@angular/core';
// import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  // productList: any[] = [];
  // currentPage: number = 1; // Current page number
  // itemsPerPage: number = 10; // Number of items to display per page

  // constructor(private dataService: DataService) {}

  // ngOnInit(): void {
  //   this.dataService.getProducts().subscribe((products: any[]) => {
  //     this.productList = products;
  //     this.loadProducts();
  //   });
  // }

  // loadProducts() {
  //   try {
  //     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //     const endIndex = startIndex + this.itemsPerPage;
  //     this.productList = this.productList.slice(startIndex, endIndex);
  //   } catch (error) {
  //     console.error('Error loading products:', error);
  //   }
  // }

  // changePage(newPage: number) {
  //   this.currentPage = newPage;
  //   this.loadProducts();
  // }

  // getPages(): number[] {
  //   const pageCount = Math.ceil(this.productList.length / this.itemsPerPage);
  //   return Array.from({ length: pageCount }, (_, i) => i + 1);
  // }

  // shouldRenderButtons(): boolean {
  //   return this.productList.length > this.itemsPerPage;
  // }
}
