import { Component } from '@angular/core';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'T-Shirt-App';
  getProductist():IProduct[]{

    return [
{
  "FronImageUrl":"assets/img/nike_front.jpg",
  "BacImageUrl":"assets/img/nike_front.jpg",
  "ProductName":"Nike Mens style wear",
  "Price":120,
  "InStock":80,
  "ProductId":1
},
{
  "FronImageUrl":"assets/img/nike_front.jpg",
  "BacImageUrl":"assets/img/nike_front.jpg",
  "ProductName":"Nike Mens style wear",
  "Price":120,
  "InStock":80,
  "ProductId":1

},
{
  "FronImageUrl":"assets/img/nike_front.jpg",
  "BacImageUrl":"assets/img/nike_front.jpg",
  "ProductName":"Nike Mens style wear",
  "Price":120,
  "InStock":80,
  "ProductId":1

},
{
  "FronImageUrl":"assets/img/nike_front.jpg",
  "BacImageUrl":"assets/img/nike_front.jpg",
  "ProductName":"Nike Mens style wear",
  "Price":120,
  "InStock":80,
  "ProductId":1

},
{
  "FronImageUrl":"assets/img/nike_front.jpg",
  "BacImageUrl":"assets/img/nike_front.jpg",
  "ProductName":"Nike Mens style wear",
  "Price":120,
  "InStock":80,
  "ProductId":1

},
{
  "FronImageUrl":"assets/img/nike_front.jpg",
  "BacImageUrl":"assets/img/nike_front.jpg",
  "ProductName":"Nike Mens style wear",
  "Price":120,
  "InStock":80,
  "ProductId":1

}

    ];
  }
}
