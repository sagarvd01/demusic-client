import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableModel } from 'src/app/model/data';
import { ApiService } from 'src/app/shared/api.service';
import { WalletService } from 'src/app/shared/wallet.service';
import { Web3Service } from 'src/app/shared/web3.service';
import { environment } from 'src/environments/environment';
import { faCircleChevronLeft, faChevronCircleRight, faCirclePlay, faCirclePause, faVolumeHigh, faVolumeLow } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent {
    songs: any;
    currentSong : any;
    currentSongIndex: number = 0;
    baseURL: string = "https://demusic.cyclic.app/song/";
    @ViewChild('player') player ?: ElementRef;
    @ViewChild('playrange') playrange ?: ElementRef;
    playerLoaded: boolean = false;
    faCirclePlay = faCirclePlay;
    faCirclePause = faCirclePause;
    faCircleChevronLeft = faCircleChevronLeft;
    faChevronCircleRight = faChevronCircleRight;
    faVolumeHigh = faVolumeHigh;
    faVolumeLow = faVolumeLow;
    currentTime: string = "00:00";
    // raf: any;
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

    playSong(song: any, index: number){
        this.currentSong = song;
        this.currentSongIndex = index;
        if(!this.playerLoaded){
            this.playerLoaded = true;
        }
        this.cd.detectChanges();
        this.player?.nativeElement.load();
        this.currentTime = "00:00";
        this.player?.nativeElement.play();
        // this.raf = requestAnimationFrame(this.updateTime);
    }

    getSongDuration(){
        let song = this.currentSong.duration.split(":");
        return +song[0]*60 + +song[1];
    }

    setCurrentTime(time: number){
        let min = ('0' + Math.floor(time / 60).toString()).slice(-2);
        let secs = ('0' + time % 60).slice(-2);
        this.currentTime = min.toString() + ":" + secs.toString();
    }
    seekAudio($event: any){
        if(this.player){
            this.player.nativeElement.currentTime = $event.target.value;
        }
    }

    playAudio(){
        this.player?.nativeElement.play();
    }

    pauseAudio(){
        this.player?.nativeElement.pause();
    }

    nextTrack(){
        if(this.currentSongIndex == this.songs.length - 1){
            this.currentSongIndex = 0;
        }
        else{
            this.currentSongIndex++;
        }
        this.playSong(this.songs[this.currentSongIndex], this.currentSongIndex);
    }

    prevTrack(){
        if(this.currentSongIndex == 0){
            this.currentSongIndex = this.songs.length - 1;
        }
        else{
            this.currentSongIndex--;
        }
        this.playSong(this.songs[this.currentSongIndex], this.currentSongIndex);
    }

    updateTime($event: any){
        if(this.playrange){
            this.playrange.nativeElement.value = Math.floor($event.target.currentTime);
            this.setCurrentTime(Math.floor($event.target.currentTime));
        }
    }
}
