import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category, DummyServiceService } from 'src/app/services/dummy-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  result! : Observable<any>;
  searchTerms: string =''; //termos de busca
  category: Category = Category.All;
  constructor(private dummyAPI: DummyServiceService) { }

  ngOnInit() {
  }

  search(){
    this.result = this.dummyAPI.getAll(this.searchTerms, this.category).pipe(map(results => results['Search']));
  }

}
