import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ToolbarModule } from '../toolbar/toolbar.module';
import { SidenavModule } from '../sidenav/sidenav.module';

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    SidenavModule,
    MatCardModule,
    MatSidenavModule,
  ],
})
export class LayoutModule {}
