import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dish } from './../../shared/dish';
import { DishProvider } from './../../providers/dish/dish';
import { Promotion } from './../../shared/promotion';
import { PromotionProvider } from './../../providers/promotion/promotion';
import { Leader } from './../../shared/leader';
import { LeaderProvider } from './../../providers/leader/leader';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  dish: Dish;
  leader: Leader;
  promotion: Promotion;
  dishErrMsg: string;
  leaderErrMsg: string;
  promotionErrMsg: string;

  constructor(
    public navCtrl: NavController,
    private leaderService: LeaderProvider,
    private dishService: DishProvider,
    private promotionService: PromotionProvider,
    @Inject('BaseURL') public baseURL
  ) {}

  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe(
      dish => {
        this.dish = dish;
      },
      err => {
        this.dishErrMsg = <any>err;
      }
    );
    this.leaderService
      .getFeaturedLeader()
      .subscribe(
        leader => (this.leader = leader),
        err => (this.leaderErrMsg = <any>err)
      );
    this.promotionService
      .getFeaturedPromotion()
      .subscribe(
        promotion => (this.promotion = promotion),
        err => (this.promotionErrMsg = <any>err)
      );
  }
}
