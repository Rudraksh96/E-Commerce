import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { AddcartComponent } from 'src/app/addcart/addcart.component';
import { AuthService } from 'src/app/authentication/auth.service';
import { LoginComponent } from 'src/app/login/login.component';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartIcon=faShoppingCart;
public totalItem:number=0;


constructor(private cartService:CartService){}
//   this.logincomp.profileInfo.getValue()
// }

ngOnInit(): void {
  this.cartService.getProducts()
  .subscribe(res=>{
    this.totalItem=res.length;
  })
}


}
