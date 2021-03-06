import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService } from '../_services';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    forgotpasswordForm: FormGroup;
    loading = false;
    submitted = false;
    

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }


    ngOnInit() {
        this.forgotpasswordForm = this.formBuilder.group({
            email: ['', Validators.required]
        });
    }
    get f() { return this.forgotpasswordForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.forgotpasswordForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.forgotpassword(this.forgotpasswordForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('password sent to registered email', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
