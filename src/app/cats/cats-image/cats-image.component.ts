import { Component, OnInit } from '@angular/core';
import { Cat } from '../model';
import { CatsDataService } from '../cats-data.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-cats-image',
  templateUrl: './cats-image.component.html',
  styleUrls: ['./cats-image.component.scss']
})
export class CatsImageComponent{

  constructor(private catsDataService: CatsDataService, private activatedRoute: ActivatedRoute) {
    this.route = activatedRoute.snapshot;
  }
  idx = 0;
  cat: Cat;
  adoptionFormActive: boolean;
  showConfirmMsg: boolean;
  private route: ActivatedRouteSnapshot;

  ngOnInit(): void {
    const catName = this.route.params['catName'];
    this.catsDataService.getCat(catName).subscribe(data => this.cat = data);
    this.idx = 0;
  }

  onClickNext(){
    if(this.idx == this.catsDataService.getUrlArrayLength(this.cat.name) - 1 ){
      this.idx = 0;
    }
    else{
      this.idx++;
    }
  }

  onClickPrevious(){
    if(this.idx == 0){
      this.idx = this.catsDataService.getUrlArrayLength(this.cat.name) - 1;
    }
    else{
      this.idx--;
    }
  }

}


