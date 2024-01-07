import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { UserComponent } from '../components/user/user.component';
import { ProductComponent } from '../components/product/product.component';

export const routes: Routes = [
    // { path: "", component: HomeComponent },
    // { path: "login", component: LoginComponent },
    { path: "products", component: ProductComponent },
    { path: "users", component: UserComponent }
];
