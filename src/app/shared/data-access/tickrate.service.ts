import { Injectable } from "@angular/core";
import { BehaviorSubject, EMPTY, interval, switchMap } from "rxjs";

@Injectable()
export class TickrateService {
  tickrate$ = new BehaviorSubject<number>(0.5);
  constantEmitter$ = this.tickrate$.pipe(
    switchMap((tickrate) => (tickrate ? interval(1000 * tickrate) : EMPTY))
  );

  setTickrate(value: number) {
    this.tickrate$.next(value);
  }
}
