import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '../_services';

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;
    public showNotification: boolean;

    constructor(private alertService: AlertService) { 
        this.showNotification = true;
            setInterval(() => {
                this.showNotification = true;
            }, 30);
    }

    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => { 
            this.message = message; 
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    
    public onCloseClick(): void {
        this.showNotification = false;
    }
}