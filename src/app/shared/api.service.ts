import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ObservableModel } from '../model/data';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor() { }
    apiUpdates$ = new BehaviorSubject<ObservableModel>({type: '', value: '', relevant: false});

    getMusicList(){

    }
    checkUserAuth(){
        
    }
}
