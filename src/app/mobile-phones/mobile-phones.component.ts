import { Component, OnInit } from '@angular/core';
import { ProductPreviewComponent } from '../product-preview/product-preview.component';
import { MobilePhonesService } from '../services/mobile-phones.service';

@Component({
  selector: 'app-mobile-phones',
  templateUrl: './mobile-phones.component.html',
  styleUrls: ['./mobile-phones.component.css']
})
export class MobilePhonesComponent implements OnInit {

  mobilePhonesArr: Array<ProductPreviewComponent> = [];

  constructor(private mobilePhonesService: MobilePhonesService) { }

  ngOnInit(): void {
    this.mobilePhonesService.getMobilePhone()
      .subscribe((data)=>{
        console.log(data);
        
        
      });
    
  }

  


  

}
