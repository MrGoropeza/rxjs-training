import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class SidenavModule {}
