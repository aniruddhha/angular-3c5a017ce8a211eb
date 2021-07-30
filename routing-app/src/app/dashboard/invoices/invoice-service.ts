import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class InvoiceService {

    camera() {
        const obs = new Observable(sub => {
            // async part - write heavy duty code
            for (let i = 0; i < 10000; i++) {
                sub.next(i) // progress
                // if (i == 15) sub.error('it is 15') // error
            }
            sub.complete() // complete
        })
        return obs
    }
}