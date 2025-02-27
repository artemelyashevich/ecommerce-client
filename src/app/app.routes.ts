import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "products",
        component: ProductsComponent,
    }, 
    {
        path: "products/:id",
        component: ProductComponent
    },
    {
        path: "profile",
        component: ProfileComponent
    },
    {
        path: "cart",
        component: CartComponent
    }
];
