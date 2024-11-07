import { Routes } from '@angular/router';
import { WeatherMapComponent } from './weather-map/weather-map.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: WeatherMapComponent },
];
