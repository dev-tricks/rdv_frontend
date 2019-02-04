import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventosComponent} from './eventos.component';
import {RouterModule, Routes} from '@angular/router';
import {FuseSharedModule} from '../../../@fuse/shared.module';

const routes = [
    {
        path: '**',
        component: EventosComponent
    }
];

@NgModule({
    declarations: [EventosComponent],
    imports: [
        RouterModule.forChild(routes),

        FuseSharedModule
    ],
    exports: [
        EventosComponent
    ]
})
export class EventosModule {
}
