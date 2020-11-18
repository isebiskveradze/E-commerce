import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductPreviewModel } from '../models/product-preview.model';

@Injectable({
  providedIn: 'root'
})
export class MobilePhonesService {

  constructor(private http: HttpClient) { }
  
  getMobilePhone(): Observable <Array<ProductPreviewModel>>{
    return this.http.get<Array<ProductPreviewModel>>('http://localhost:3000/mobilePhone');
  }


  editMobilePhone(MobilePhone: ProductPreviewModel): Observable<ProductPreviewModel>{
    return this.http.put<ProductPreviewModel>(`http://localhost:3000/mobilePhone${MobilePhone.id}`,MobilePhone);
  }

  deleteMobilePhone(id: number | string){
    return this.http.delete<ProductPreviewModel>(`http://localhost:3000/mobilePhone/${id}`);
  }

  addMobilePhone(MobilePhone: ProductPreviewModel): Observable<ProductPreviewModel>{
    return this.http.post<ProductPreviewModel>('http://localhost:3000/mobilePhone',MobilePhone);
  }
}
