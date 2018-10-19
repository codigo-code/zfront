import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { IngresarProdcutosComponent } from './ingresar-prodcutos/ingresar-prodcutos.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'ingresar', component: IngresarProdcutosComponent },
  { path: 'listar', component: ListarProductosComponent },
  { path: '', component: ListarProductosComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    IngresarProdcutosComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
