import { Component, OnInit } from "@angular/core";
import {
  concatMap,
  delayWhen,
  from,
  Observable,
  of,
  repeat,
  startWith,
} from "rxjs";
import { TickrateService } from "src/app/shared/data-access/tickrate.service";
import { Fruit } from "../../utils/models/fruit.model";

@Component({
  selector: "app-from",
  templateUrl: "./from.component.html",
  styleUrls: ["./from.component.scss"],
})
export class FromComponent implements OnInit {
  emittedFruit$!: Observable<Fruit>;

  fruits: Fruit[] = [
    {
      name: "apple",
      icon: "🍎",
      isFresh: true,
    },
    {
      name: "banana",
      icon: "🍌",
      isFresh: true,
    },
    {
      name: "strawberry",
      icon: "🍓",
      isFresh: true,
    },
  ];

  constructor(private tickrateService: TickrateService) {}

  ngOnInit(): void {
    this.emittedFruit$ = from(this.fruits).pipe(
      concatMap((fruit) =>
        of(fruit).pipe(delayWhen(() => this.tickrateService.constantEmitter$))
      ),
      repeat(),
      startWith({ name: "No Fruit", icon: "-", isFresh: false } as Fruit)
    );
  }
}
