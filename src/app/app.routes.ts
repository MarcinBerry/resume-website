import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ExperienceComponent} from "./components/experiance/experience.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];
export const AppRoutes = RouterModule.forRoot(routes);
