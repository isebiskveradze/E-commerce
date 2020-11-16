import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person = 
    {name: 'john',
    gender : 'male'
    }
   person2 =  {
      name: 'Gela',
      gender: 'female'
    }
  
  title = 'E-commerce';
}
