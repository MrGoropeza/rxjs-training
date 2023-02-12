import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FromComponent } from "./from.component";
import { RouterModule, Routes } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

const routes: Routes = [
  {
    path: "",
    component: FromComponent,
  },
];

@NgModule({
  declarations: [FromComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
  ],
})
export class FromModule {}
