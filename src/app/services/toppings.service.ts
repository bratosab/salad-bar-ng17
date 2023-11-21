import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Topping } from "../models/topping.model";

@Injectable({
    providedIn: 'root'
})
export class ToppingsService {
    readonly apiBase = "https://retoolapi.dev"

    constructor(private http: HttpClient){}

    getToppings(): Observable<Topping[]> {
        return this.http.get<Topping[]>(`${this.apiBase}/udhTkG/toppings`)
    }
}