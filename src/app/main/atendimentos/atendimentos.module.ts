import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtendimentosComponent} from './atendimentos.component';
import {RouterModule} from '@angular/router';
import {FuseSharedModule} from '../../../@fuse/shared.module';

const routes = [
    {
        path: '**',
        component: AtendimentosComponent
    }
];

@NgModule({
    declarations: [AtendimentosComponent],
    imports: [
        RouterModule.forChild(routes),

        FuseSharedModule
    ],
    exports: [
        AtendimentosComponent
    ]
})
export class AtendimentosModule {
}
