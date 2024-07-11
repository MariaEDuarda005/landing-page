import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// aqui controlamos as rotas da nossa aplicação, nesse caso só terá a home
export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    }
];
