import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { CursoListaComponent } from './dashboard/curso/curso-lista/curso-lista.component';
import { EstadoListaComponent } from './dashboard/estado/estado-lista/estado-lista.component';
import { PostListaComponent } from './dashboard/post/post-lista/post-lista.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"login", component: LoginComponent},
    {path:"dashboard", component:DashboardComponent,
        canActivate:[authGuard],
        children:[
            {path:"home", component:HomeComponent},
            {path:"curso", component:CursoListaComponent},
            {path:"estado", component:EstadoListaComponent},
            {path:"post", component:PostListaComponent}
        ]
    },
    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"**", component: PageNotFoundComponent}
];
