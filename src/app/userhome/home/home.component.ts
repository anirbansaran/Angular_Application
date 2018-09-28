import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Dashboard } from '../../_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService, UserService } from '../../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: Dashboard;
    users: Dashboard[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertservice: AlertService) {}

  ngOnInit() {
  }

}
