import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MusicPlayerRoutingModule } from "./music-player-routing.module";
import { MusicPlayerComponent } from "./music-player.component";
import { TickrateService } from "../shared/data-access/tickrate.service";

import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [MusicPlayerComponent],
  imports: [
    CommonModule,
    MusicPlayerRoutingModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
  ],
  providers: [TickrateService],
})
export class MusicPlayerModule {}
