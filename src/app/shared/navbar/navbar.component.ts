import { Component } from '@angular/core';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
    constructor(private web3: Web3Service){
        
    }

    cancelPlan(){
        if(confirm("Are you sure you want to cancel the plan? You will be redirected out of the player immediately.")){
            console.log('cancel');
        }
    }

    //https://tr228g.csb.app/ -> faucet
}