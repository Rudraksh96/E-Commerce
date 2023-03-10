import { Component,OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit  {
  trashIcon=faTrash;
  public productList : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService){}


  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.productList = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
