import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { ToolbarModule } from '../toolbar/toolbar.module';

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [CommonModule, ToolbarModule, MatGridListModule, MatCardModule],
})
export class LayoutModule {}
