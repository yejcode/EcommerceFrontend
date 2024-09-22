import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home',
  },
  {
    path: 'home',
    component: HomePageComponent,
    title: 'Home',
  },
  {
    path: 'card',
    component: CardPageComponent,
    title: 'Card',
  },
  {
    path: 'order',
    component: OrderPageComponent,
    title: 'Order',
  },
];
