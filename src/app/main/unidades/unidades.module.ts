import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadesComponent } from './unidades.component';
import {RouterModule} from '@angular/router';
import {
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule, MatRippleModule, MatSelectModule, MatSnackBarModule,
    MatSortModule,
    MatTableModule, MatTabsModule
} from '@angular/material';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {FuseConfirmDialogModule, FuseSidebarModule, FuseWidgetModule} from '../../../@fuse/components';
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

      MatButtonModule,
      MatChipsModule,
      MatExpansionModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatPaginatorModule,
      MatRippleModule,
      MatSelectModule,
      MatSortModule,
      MatSnackBarModule,
      MatTableModule,
      MatTabsModule,

      FuseSharedModule,
      FuseConfirmDialogModule,
      FuseSidebarModule,
      FuseWidgetModule
  ],
    exports: [
        UnidadesComponent
    ],
    providers: [
        UnidadesService
    ]
})
export class UnidadesModule { }
