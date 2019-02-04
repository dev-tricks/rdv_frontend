import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VisitasComponent} from './visitas.component';
import {RouterModule} from '@angular/router';
import {FuseSharedModule} from '../../../@fuse/shared.module';


const routes = [
    {
        path: '**',
        component: VisitasComponent
    }
];

@NgModule({
    declarations: [VisitasComponent],
    imports: [
        RouterModule.forChild(routes),

        FuseSharedModule
    ],
    exports: [
        VisitasComponent
    ]
})
export class VisitasModule {
}
