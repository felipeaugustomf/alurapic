import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [

    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastro/:id', component: CadastroComponent },
    { path: '**', component: ListagemComponent }

];

export const routing = RouterModule.forRoot(appRoutes);