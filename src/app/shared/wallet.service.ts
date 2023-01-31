declare global {
    interface Window {
        ethereum: any,
        sdai: any
    }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ObservableModel, ObservableTypes } from '../model/data.d';
import { ethers } from 'ethers';


@Injectable({
    providedIn: 'root'
})
export class WalletService {


    provider: any;
    chainId: any;
    address: any;
    walletUpdates$ = new BehaviorSubject<ObservableModel>({type: '', value: '', relevant: false});


    constructor() {
        if(this.isEthereumAvailable()){
			this.provider = new ethers.providers.Web3Provider(window.ethereum);
		}
    }

    getProvider(){
        return this.provider;
    }
    getChainId(): any{
        return this.chainId;
    }
    async setChainId(){
        if(!this.chainId){
            let network = await this.provider.getNetwork();
            this.chainId = network.chainId;
        }
    }
    async listAccounts(){
            let accounts = await this.provider.listAccounts();
            if(accounts.length){
                this.address = accounts[0];
                await this.setChainId();
                this.walletUpdates$.next({type: 'ac_fetch', value: accounts[0], relevant: true});
            }
    }
    isEthereumAvailable(): boolean{
		if(window && window.ethereum){
			return true;
		}
		return false;
    }
    async getAddress(){
        if(!this.address){
            await this.getAccounts();
        }
        return this.address;
    }
	async getAccounts(){
        let accounts = await this.provider.send('eth_requestAccounts', []);
        if(accounts.length){
            // debugger
            this.address = accounts[0];
            await this.setChainId();
            this.walletUpdates$.next({type: 'ac_fetch', value: accounts[0], relevant: true});
        }
	}
}
