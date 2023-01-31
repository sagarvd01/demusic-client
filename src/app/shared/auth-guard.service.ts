/* © 2020-2021 Sagar V */
import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { Router } from '@angular/router';
import { Web3Service } from './web3.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private web3: Web3Service) {

  }
  canActivate(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
        this.web3.isUserSubscribed().then(
            (result: any) => {
                if(result){
                    resolve(true)
                }
                else{
                    reject(false);
                }
            }
        ).catch(
            (e: any) => {
                reject(false);
            }
        )
    //   this.auth.validateSession().then((data) => {
    //     resolve(true);
    //   }).catch((e) => {
    //     this.router.navigate(['login'])
    //     reject(false);
    //   });
    });

  }
}
