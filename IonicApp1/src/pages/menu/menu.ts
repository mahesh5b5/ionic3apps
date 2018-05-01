import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dish } from './../../shared/dish';
import { DishProvider } from './../../providers/dish/dish';
import { DishdetailPage } from './../dishdetail/dishdetail';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage implements OnInit {
  dishErrMsg: any;
  dishes: Dish[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dishService: DishProvider,
    @Inject('BaseURL') public baseURL
  ) {}

  ngOnInit() {
    this.dishService.getDishes().subscribe(
      dishes => {
        this.dishes = dishes;
      },
      err => {
        this.dishErrMsg = err;
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  dishSelected(event, dish) {
    this.navCtrl.push(DishdetailPage, {
      dish: dish
    });
  }
}
