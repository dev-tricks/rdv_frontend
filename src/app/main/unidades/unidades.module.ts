import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadesComponent } from './unidades.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {FuseConfirmDialogModule, FuseSidebarModule} from '../../../@fuse/components';
import {UnidadesService} from './unidades.service';
import { UnidadeListComponent } from './unidade-list/unidade-list.component';

const routes = [
    {
        path: '**',
        component: UnidadesComponent
    }
];
@NgModule({
  declarations: [UnidadesComponent, UnidadeListComponent],
  imports: [
    RouterModule.forChild(routes),

      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,

      FuseSharedModule,
      FuseConfirmDialogModule,
      FuseSidebarModule
  ],
    exports: [
        UnidadesComponent
    ],
    providers: [
        UnidadesService
    ]
})
export class UnidadesModule { }
