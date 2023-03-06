import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductsService } from './services/products.service';
import { FormsModule } from '@angular/forms'; // importa FormsModule

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    ProductsListComponent,
    ProductsFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
