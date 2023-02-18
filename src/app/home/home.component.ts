import { Component, OnInit } from '@angular/core';
 import {ProductService} from '../service/product-service';
 import  {ProductsInfo} from '../interface/products.interface';
import { CartService } from '../service/cart.service';
import { AuthService } from '../authentication/auth.service';
import { Router } from '@angular/router';
 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
{

  showloader:boolean=false;
  allproducts:any =[];
  constructor (public product:ProductService,private cartService:CartService,private authService:AuthService, private router:Router){}

  ngOnInit(): any{
    // this.username=sessionStorage.getItem('token');
    this.showloader = true;
    this.product.products().subscribe((res:ProductsInfo)=>{
      console.log("data",res);
      this.showloader = false;
         this.allproducts =res.products;
         console.log(this.allproducts, 'products');

         this.allproducts.forEach((value:any) => {
          Object.assign(value,{quantity:1,total:value.price});
         });
   })
  }
  logout(){
    console.log('logout');
    this.authService.IsLoggedOut();
    this.router.navigate(['/login']);
  }
  addtocart(item:any){
    this.cartService.addtoCart(item);

  }
}
