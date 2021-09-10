import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ExperienceComponent} from "./components/experiance/experience.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  }
];
export const AppRoutes = RouterModule.forRoot(routes);
