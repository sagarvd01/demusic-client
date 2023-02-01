import { Component } from '@angular/core';
import { ObservableModel } from 'src/app/model/data';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
    userSubscriptionStatus: number = 0; // 0 -> Not initialized, 1 -> Not subscribed, 2 -> Already subscribed, 3 -> subscription success, 4 -> error
    constructor(private web3: Web3Service){
        this.web3.getSubscriptions();
        this.web3.pushUpdates$.subscribe(
            (data: ObservableModel) => {
                if(data && data.type == 'already_subscribed'){
                    this.userSubscriptionStatus = 2;
                }
                else
                if(data && data.type == 'not_subscriber'){
                    this.userSubscriptionStatus = 1;
                }
                else
                if(data && data.type == 'subscribed'){
                    this.userSubscriptionStatus = 3;
                }
                else
                if(data && data.type == 'error'){
                    this.userSubscriptionStatus = 4;
                }
            }
        )
    }

    async cancelPlan(){
        if(confirm("Are you sure you want to cancel the plan? You will be redirected out of the player immediately.")){
            await this.web3.cancelPlan();
        }
    }

    async optInNotif(){
        if(confirm("Notification are powered by PUSH (EPNS). You'll be notified about auto renewal of your subscription. Do you want to continue?")){
            await this.web3.subscribeToChannel();
        }
    }

    //https://tr228g.csb.app/ -> faucet
}
