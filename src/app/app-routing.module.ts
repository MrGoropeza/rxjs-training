import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/feature/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'observables',
    loadChildren: () =>
      import(
        './observables/feature/observables-shell/observables-shell.module'
      ).then((m) => m.ObservablesShellModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
