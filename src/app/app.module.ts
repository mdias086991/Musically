import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarInformationComponent } from './components/bar-information/bar-information.component';
import { CardProductsComponent } from './components/card-product/card-product.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FinishSaleComponent } from './pages/finish-sale/finish-sale.component';
import { ProductComponent } from './pages/product/product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BgProductComponent } from './components/bg-product/bg-product.component';
import { ShopNowComponent } from './pages/shop-now/shop-now.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BarInformationComponent,
    CardProductsComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    FinishSaleComponent,
    ProductComponent,
    DashboardComponent,
    BgProductComponent,
    ShopNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
