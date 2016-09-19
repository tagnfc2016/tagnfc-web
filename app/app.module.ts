/**
 * Created by Daniela on 18/09/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { routing, appRoutingProviders  } from './app.routing';
import { DashboardComponent } from "./dashboard";
import { ProdutoComponent } from "./produto";
import { ConfiguracaoComponent } from "./configuracao";
import { UsuarioComponent } from "./usuario";

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ConfiguracaoComponent,
        UsuarioComponent,
        ProdutoComponent,
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }