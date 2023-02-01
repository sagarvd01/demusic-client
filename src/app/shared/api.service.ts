import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ObservableModel } from '../model/data';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private api: HttpClient) { }
    APIURL = "https://demusic.cyclic.app/";
    apiUpdates$ = new BehaviorSubject<ObservableModel>({type: '', value: '', relevant: false});

    getMusicList(){
        return new Promise( (resolve, reject) => {
            this.api.get(this.APIURL + 'songs').subscribe(
                (data: any) => {
                    resolve(data);
                },
                (error: any) => {
                    reject(error);
                }
            );
        })
    }
    checkUserAuth(){
        
    }
}
