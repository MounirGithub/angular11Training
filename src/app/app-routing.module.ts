import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompTOVisitComponent } from './components/comp-tovisit/comp-tovisit.component';

const routes: Routes=[
    {
        path: '',
        component :''CompTOVisitComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component :''CompTOVisitComponent
    }
]
@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}