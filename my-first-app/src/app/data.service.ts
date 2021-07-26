import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DataService {

  cnt = 0

  constructor() { }
}


@Injectable({ providedIn: 'root' })
export class BigDataService {

}

@Injectable({ providedIn: 'root' })
export class AllService {

  constructor(
    private ds: DataService,
    private bds: BigDataService
  ) {

  }
}