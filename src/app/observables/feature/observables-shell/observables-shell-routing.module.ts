import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'observer',
    loadChildren: () =>
      import('../observer/observer.module').then((m) => m.ObserverModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'observer',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservablesShellRoutingModule {}
