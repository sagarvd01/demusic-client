import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableModel } from 'src/app/model/data';
import { WalletService } from 'src/app/shared/wallet.service';
import { Web3Service } from 'src/app/shared/web3.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.sass']
})
export class FrontPageComponent {
    state: string = "";
    error: string = "";
    constructor(private ws: WalletService, private web3: Web3Service, private router: Router){
        this.ws.walletUpdates$.subscribe(
            (data: ObservableModel) => {
                if(data && data.type == 'ac_fetch' && data.value != '' && data.relevant && this.state == ""){
                    this.state = 'wallet_connected';
                    this.error = "";
                }
                if(data.type == 'error'){
                    this.error = data.value;
                }
            }
        )
        this.web3.web3Updates$.subscribe(
            (data: ObservableModel) => {
                if(data && data.type == 'flow_rate_fetch' && data.relevant && this.state == "wallet_connected"){
                    if(+data.value >= environment.FLOW_RATE){
                        this.state = 'flow_exist';
                    }
                    this.error = "";
                }
                if(data.type == 'error'){
                    this.error = data.value;
                }
            }
        )
    }

    async connectWallet(){
        await this.ws.getAccounts();
    }

    async subscribePlan(){
        await this.web3.subscribePlan();
        await this.web3.getTokenflow();
    }

    launchApp(){
        if(this.state == 'flow_exist'){
            this.router.navigate(['/player']);
        }
    }
}
