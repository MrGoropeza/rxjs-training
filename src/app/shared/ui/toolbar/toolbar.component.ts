import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { TickrateService } from '../../data-access/tickrate.service';

@Component({
  selector: `app-toolbar`,
  templateUrl: `./toolbar.component.html`,
  styleUrls: [`./toolbar.component.scss`],
})
export class ToolbarComponent {
  @Output() menuClick = new EventEmitter();

  iconToggler$ = new BehaviorSubject(false);

  emitter$ = this.constantEmitterService.constantEmitter$
    .pipe(
      tap(() => {
        this.iconToggler$.next(!this.iconToggler$.value);
      })
    )
    .subscribe();

  formatLabel(value: number) {
    return value.toString() + `s`;
  }

  constructor(protected constantEmitterService: TickrateService) {}
}
