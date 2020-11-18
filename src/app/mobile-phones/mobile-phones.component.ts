import { Component, OnInit } from '@angular/core';
import { ProductPreviewModel } from '../models/product-preview.model';
import { ProductPreviewComponent } from '../product-preview/product-preview.component';
import { MobilePhonesService } from '../services/mobile-phones.service';

@Component({
  selector: 'app-mobile-phones',
  templateUrl: './mobile-phones.component.html',
  styleUrls: ['./mobile-phones.component.css']
})
export class MobilePhonesComponent implements OnInit {

  mobilePhonesArr: Array<ProductPreviewModel> = [];
  
  mobilePhoneTitle: string;
  mobilePhoneDescription:string;
  mobilePhoneId: number;
  mobilePhonePrice: number;


  constructor(private mobilePhonesService: MobilePhonesService) { }
  


  ngOnInit(): void {
    this.mobilePhonesService.getMobilePhone()
      .subscribe((data)=>{
        // console.log(data);
        this.mobilePhonesArr = data;
        for (let i = 0; i < this.mobilePhonesArr.length; i++) {
          console.log(this.mobilePhonesArr[i].title)
          this.mobilePhoneTitle = this.mobilePhonesArr[i].title
          this.mobilePhoneDescription = this.mobilePhonesArr[i].description
          this.mobilePhonePrice = this.mobilePhonesArr[i].price
          this.mobilePhoneId = this.mobilePhonesArr[i].id
          
        }
        
        
      });



  }

  

}
