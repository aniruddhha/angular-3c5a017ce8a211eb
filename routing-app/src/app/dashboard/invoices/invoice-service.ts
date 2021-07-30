import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class InvoiceService {

    camera() {
        const obs = new Observable(sub => {
            // async part
            sub.next() // progress
            sub.error() // error
            sub.complete() // complete
        })
        return obs
    }
}