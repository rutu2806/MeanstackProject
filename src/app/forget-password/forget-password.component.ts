import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  public fbFormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  async confirmPwd() {
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3200/addpwd";
    const result = await this.http.post(url, data).toPromise();
    console.log(result);
    this.router.navigate(['login']);
    this.fbFormGroup.reset();
  }

}
