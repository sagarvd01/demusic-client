import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableModel } from 'src/app/model/data';
import { ApiService } from 'src/app/shared/api.service';
import { WalletService } from 'src/app/shared/wallet.service';
import { Web3Service } from 'src/app/shared/web3.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent {
    songs: any;
    currentSong ?: string;
    baseURL: string = "https://demusic.cyclic.app/song/";

    constructor(private ws: WalletService, private web3: Web3Service, private router: Router, private api: ApiService, private cd: ChangeDetectorRef){
        this.ws.walletUpdates$.subscribe(
            (data: ObservableModel) => {
            }
        )
        this.web3.web3Updates$.subscribe(
            (data: ObservableModel) => {
                if(data && data.type == 'flow_deleted'){
                    this.router.navigate(['/']);
                }
            }
        )
    }
    ngOnInit(){
        this.getMusicList();
    }

    getMusicList(){
        this.api.getMusicList().then(
            (data: any) => {
                this.songs =  data;
            }
        ).catch(
            (e: any) =>{
                console.log(e);
            }
        )
    }

    playSong(index: string){
        this.currentSong = index;
        this.cd.detectChanges();
    }
}
