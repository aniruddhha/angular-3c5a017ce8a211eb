import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {

    saveUser() {
        localStorage.setItem('user', 'someone')
    }

    getUser() {
        return localStorage.getItem('user')
    }
}