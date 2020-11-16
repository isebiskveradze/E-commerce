import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: string;
  @Input() number: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id'); //ამ პროდუქტის აიდით შეგვიძლია გამოვიძახოთ სერვისი და დავაბრუნებინოთ დეტალური ინფორმაცია პროდუქტზე.



  }

}
