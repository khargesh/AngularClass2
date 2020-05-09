import { Component } from '@angular/core';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'T-Shirt-App';
products:IProduct[]=[];
isInStock=true;
stockColor='green';
outofStockColor='red';
constructor(){
this.products=this.getProductist();
}

changeImage(evt,imageUrl)
{debugger;
evt.currentTarget.src=imageUrl;

}


  getProductist():IProduct[]{

    return [
{
  "FronImageUrl":"assets/img/nike_front.jpg",
  "BacImageUrl":"assets/img/nike_back.jpg",
  "ProductName":"Nike Mens style wear",
  "Price":110,
  "InStock":80,
  "ProductId":1
},
{
  "FronImageUrl":"assets/img/puma_front.jpg",
  "BacImageUrl":"assets/img/puma_back.jpg",
  "ProductName":"Puma Mens style wear",
  "Price":120,
  "InStock":180,
  "ProductId":1

},
{
  "FronImageUrl":"assets/img/levis_front.jpg",
  "BacImageUrl":"assets/img/levis_back.jpg",
  "ProductName":"Nike Mens style wear",
  "Price":130,
  "InStock":95,
  "ProductId":1

},
{
  "FronImageUrl":"assets/img/adidas_front.jpg",
  "BacImageUrl":"assets/img/adidas_back.jpg",
  "ProductName":"Adidas Mens style wear",
  "Price":140,
  "InStock":120,
  "ProductId":1

},
{
  "FronImageUrl":"assets/img/duke_front.jpg",
  "BacImageUrl":"assets/img/duke_back.jpg",
  "ProductName":"Duke Mens style wear",
  "Price":150,
  "InStock":90,
  "ProductId":1

}

    ];
  }
}
