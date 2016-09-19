/**
 * Created by Daniela on 18/09/2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard";
import { ProdutoComponent } from "./produto";
import { UsuarioComponent } from "./usuario";
import { ConfiguracaoComponent } from "./configuracao";

const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'produto',
        component: ProdutoComponent
    },
    {
        path: 'perfil',
        component: UsuarioComponent
    },
    {
        path: 'configuracoes',
        component: ConfiguracaoComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});