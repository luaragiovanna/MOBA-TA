import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbapiService } from 'src/app/services/omdbapi.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {
  info: any;
  //do id do filme a gente pega e faz uma busca a partir disso
  constructor(private actRoute: ActivatedRoute, private omdbapi: OmdbapiService) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    //resultado retornou e guardou no info
    this.omdbapi.getById(id).subscribe(result => this.info = result);
  }

  openURL(){
    //abrir em uma nova pagina
    window.open(this.info.Website, '_blank');
  }

}
