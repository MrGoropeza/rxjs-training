import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "music-player",
    loadChildren: () =>
      import("./music-player/music-player.module").then(
        (m) => m.MusicPlayerModule
      ),
  },
  {
    path: "operators",
    loadChildren: () =>
      import("./operators/feature/operators-shell/operators-shell.module").then(
        (m) => m.OperatorsShellModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
