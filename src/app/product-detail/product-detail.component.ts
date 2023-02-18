import { Component } from '@angular/core';
import { DetailsService } from '../service/details.service';
import  {ProductsInfo} from '../interface/products.interface';
import { AuthService } from '../authentication/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  showloader:boolean=false;
  pdt:any =[];
  constructor(private detailsService:DetailsService, private activateRoute:ActivatedRoute){}


  ngOnInit():any{
    this.showloader = true;
  // let productId=this.activateRoute.snapshot.paramMap.get('productId');
  // console.log(productId);
  // productId && this.detailsService.id(productId).subscribe((res)=>{
  //   console.log(res);
  // })
  this.detailsService.id().subscribe((res:ProductsInfo)=>{
    console.log(res,"details");
    this.showloader = false;
    this.pdt=res;
  })
  }
}
