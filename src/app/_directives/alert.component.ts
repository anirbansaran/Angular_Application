import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '../_services';

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit {
    private subscription: Subscription;
    message: any;
    isClose = false;
    constructor(private alertService: AlertService) { 
        
    }

    ngOnInit() {
        this.message =  this.alertService.getMessage();
    }

    
    public onCloseClick() {

        this.isClose = true;
    }
}