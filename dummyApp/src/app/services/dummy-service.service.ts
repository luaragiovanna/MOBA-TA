import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export enum Category{
  All = "",
  Smartphones = "smartphones",
  laptops = "laptops",
  fragrances = "fragrances",
  skincare = "skincare",
  groceries = "groceries",
  homedecoration = "home-decoration",
  furniture = "furniture",
  tops = "tops",
  womens_dresses = "womens-dresses",
  womens_shoes = "womens-shoes",
  mens_shirts = "mens-shirts",
  mens_shoes = "mens-shoes",
  mens_watches = "mens-watches",
  womens_watches ="womens-watches",
  womens_bags = "womens-bags",
  womens_jewellery = "womens-jewellery",
  sunglasses ="sunglasses",
  automotive ="automotive",
  motorcycle ="motorcycle",
  lighting = "lighting"
}
@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {
  url = 'https://dummyjson.com/';


  constructor( private http: HttpClient) { }

  getAll(title: string, category: Category): Observable<any>{
    return this.http.get(`${this.url}/search?q=${encodeURI(title)}&category=${category}`);
  }


}
