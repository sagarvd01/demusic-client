import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ObservableModel, ObservableTypes } from '../model/data.d';
import { BigNumber, ethers } from 'ethers';
import { environment } from '../../environments/environment';
import { WalletService } from './wallet.service';
import { Framework } from '@superfluid-finance/sdk-core';
import * as PushAPI from "@pushprotocol/restapi";
@Injectable({
    providedIn: 'root'
})
export class Web3Service {

    contractInstance: any;
    faucetContract: any;
    sDaixContract: any;
    sf: any;
    superSigner: any;
    web3Updates$ = new BehaviorSubject<ObservableModel>({type: '', value: '', relevant: false});
    pushUpdates$ = new BehaviorSubject<ObservableModel>({type: '', value: '', relevant: false});
    constructor(private ws: WalletService) {
        this.ws.walletUpdates$.subscribe(
            (data) => {
                if(data && data.relevant && data.type == 'ac_fetch' && data.value != '' && !this.contractInstance){
                    this.initContract();
                }
            }
        );
    }

    async initContract(){
        if(!this.contractInstance){
            console.log(this.ws.getChainId());
            if(this.ws.getChainId() == 5){
                this.contractInstance = await new ethers.Contract(environment.userRegistry, environment.userRegistryABI, this.ws.getProvider().getSigner());
                this.faucetContract = await new ethers.Contract(environment.faucetContract, environment.faucetABI, this.ws.getProvider().getSigner());
                this.sf = await Framework.create({
                    chainId: this.ws.getChainId(),
                    provider: this.ws.getProvider()
                });
                console.log(this.sf);
                this.superSigner = this.sf.createSigner({signer: this.ws.getProvider().getSigner()});
                // console.log(await this.sf.loadSuperToken('environment.sDaix'));
                // debugger;
                this.sDaixContract = await this.sf.loadSuperToken(environment.sDaix); //await new ethers.Contract(environment.sDaix, environment.sDaixABI, this.ws.getProvider().getSigner());
                // window.sdai = this.sDaixContract;
                // await this.getTestDaixBalance();
                await this.getTokenflow();
                // console.log(this.contractInstance);
            }
            else{
                this.web3Updates$.next({type: 'error', value: "Wrong Chain. Please switch to Goerli.", relevant: true});
            }
        }
    }

    async getTestDaix(){
        if(this.faucetContract){
            try{
                const tx = await this.faucetContract.tapFaucet();
                await tx.wait();
                this.web3Updates$.next({type: 'claim_update_success', value: "Claim Succesful", relevant: true});
            }
            catch(e: any){
                this.web3Updates$.next({type: 'claim_update_error', value: e.toString(), relevant: true});
            }
        }
    }

    async getTestDaixBalance(){
        try{
            if(this.sDaixContract){
                const balance = await this.sDaixContract.balanceOf({account: await this.ws.getAddress(), providerOrSigner: this.ws.getProvider().getSigner()});
                return balance;
            }
        }
        catch(e: any){
            this.web3Updates$.next({type: 'error', value: 'Error fetching DAI balance', relevant: true});
        }
    }

    async isUserSubscribed(){
        try{
            if(this.sDaixContract){
                const res = await this.sDaixContract.getFlow({
                    sender: await this.ws.getAddress(),
                    receiver: environment.ownerAddress,
                    providerOrSigner: this.ws.getProvider().getSigner()
                });
                console.log(+res.flowRate >= environment.FLOW_RATE)
                return +res.flowRate >= environment.FLOW_RATE ? true : false;
            }
        }
        catch(e: any){
            return false;
        }
    }

    async getTokenflow(){
        try{
            if(this.sDaixContract){
                const res = await this.sDaixContract.getFlow({
                    sender: await this.ws.getAddress(),
                    receiver: environment.ownerAddress,
                    providerOrSigner: this.ws.getProvider().getSigner()
                });
                this.web3Updates$.next({type: 'flow_rate_fetch', value: res.flowRate, relevant: true});
                console.log(res);
                return res;
            }
        }
        catch(e: any){
            this.web3Updates$.next({type: 'error', value: 'Error fetching Flow Details', relevant: true});
        }
    }

    async subscribePlan(){
        try{
            const monthlyAmount: any = ethers.utils.parseEther("4");
            const flowRate: number = Math.floor(monthlyAmount / 3600 / 24 / 30);
            const tx = await this.contractInstance.addUser();
            await tx.wait();
            // debugger;
            let flowData = await {
                sender: await this.ws.getAddress(),
                receiver: environment.ownerAddress,
                flowRate: flowRate.toString()
            }
            let flowOp = this.sDaixContract.createFlow(flowData);
            await flowOp.exec(this.superSigner);
            this.web3Updates$.next({type: 'flow_created', value: 'User succesfully subscribed', relevant: true});
        }
        catch(e: any){
            console.log(e);
            this.web3Updates$.next({type: 'error', value: 'Error Creating Flow', relevant: true});
        }
    }

    async cancelPlan(){
        try{
            const flowData = await {
                sender: await this.ws.getAddress(),
                receiver: environment.ownerAddress
            };
            let flowOp = await this.sDaixContract.deleteFlow(flowData);
            await flowOp.exec(this.superSigner);
            this.web3Updates$.next({type: 'flow_deleted', value: 'User has cancelled subscription', relevant: true});
        }catch(e){
            this.web3Updates$.next({type: 'error', value: 'Error while unsubscribing', relevant: true});
        }
    }

    async getSubscriptions(){
        const wallet = await this.ws.getAddress();
        const subscriptions = await PushAPI.user.getSubscriptions({
            user: `eip155:5:${wallet}`, // user address in CAIP
            env: 'staging'
        });
        if(subscriptions.findIndex((x: any) => x.channel == environment.EPNS_CHANNEL_ID) > -1){
            this.pushUpdates$.next({type: 'already_subscribed', value: 'User Already Subscribed', relevant: true});
        }
        else{
            this.pushUpdates$.next({type: 'not_subscriber', value: 'User hasn\'t subscribed', relevant: true});
        }
    }

    async subscribeToChannel(){
        const wallet = await this.ws.getAddress();
        await PushAPI.channels.subscribe({
            signer: await this.ws.getProvider().getSigner(),
            channelAddress: environment.EPNS_CHANNEL_ADDRESS, // channel address in CAIP
            userAddress: `eip155:5:${wallet}`, // user address in CAIP
            onSuccess: () => {
                this.pushUpdates$.next({type: 'subscribed', value: 'User subscribed', relevant: true});
            },
            onError: () => {
                this.pushUpdates$.next({type: 'error', value: "Subscription failed", relevant: true})
            },
            env: 'staging'
          })
    }
}
