import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, interval, switchMap } from 'rxjs';

@Injectable()
export class TickrateService {
  tickrate$ = new BehaviorSubject<number>(0.5);
  constantEmitter$ = this.tickrate$.pipe(
    switchMap((tickrate) => {
      if (tickrate === 0) {
        return EMPTY;
      }
      return interval(1000 * tickrate);
    })
  );

  setTickrate(value: number) {
    this.tickrate$.next(value);
  }
}
