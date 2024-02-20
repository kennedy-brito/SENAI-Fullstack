import { Routes } from '@angular/router';
import InicioComponent from './inicio/inicio.component';
import LoginComponent from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';
import { CadastroProdutoComponent } from './restrito/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './restrito/lista-produto/lista-produto.component';
import { AtualizaProdutoComponent } from './restrito/atualiza-produto/atualiza-produto.component';
import { GuardGuard } from './guards/guard.guard';

export const routes: Routes = [
    {
        path:'inicio', component: InicioComponent
    },
    {
        path:'login', component: LoginComponent
    },
    {
        path:'restrito', 
        component: RestritoComponent,
        canActivate: [GuardGuard],
        children:[
            {
                path: 'cadastro', 
                component: CadastroProdutoComponent,
                canActivate: [GuardGuard]
            },
            {
                path: 'lista', 
                component: ListaProdutoComponent,
                canActivate: [GuardGuard]
            },
            {
                path:'editar/:id', 
                component: AtualizaProdutoComponent,
                canActivate: [GuardGuard]
            },
            {
                path:'', redirectTo: 'lista', pathMatch: 'full'
            }
        ]
    },
    {
        path:'', redirectTo:'/inicio',pathMatch:'full'
    }

];
