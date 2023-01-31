import { Component } from '@angular/core';
import { Track } from '@enlivensystems/ngx-audio-player';   
import { WalletService } from './shared/wallet.service';
import { Web3Service } from './shared/web3.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

    constructor(private web3: Web3Service, private ws: WalletService){
        // this.testFn();
        // this.checkWallet();
    }

    async checkWallet(){
        this.ws.listAccounts();
    }

    ngAfterViewInit(){
        this.checkWallet();
    }

    // async testFn(){
    //     await this.ws.getAccounts();
    //     // await this.web3.getTestDaixBalance();
    // }

}
