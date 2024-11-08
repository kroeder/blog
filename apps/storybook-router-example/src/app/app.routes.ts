import { Route } from '@angular/router';
import { OverviewComponent } from './pages/overview.component';
import { DetailsComponent } from './pages/details.component';

export const appRoutes: Route[] = [
  { path: '', component: OverviewComponent },
  { path: 'profile', component: DetailsComponent },
];
