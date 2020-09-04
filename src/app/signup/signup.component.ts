import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public invalidcred = false;
  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  closeTheModal() {
    this.activeModal.dismiss();
    this.router.navigate(['login']);
  }

  // accountCreated() {
  //   this.activeModal.dismiss();
  //   this.router.navigate(['login']);
  // }


  async signup() {
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3200/auth-user2";
    const result: any = await this.http.post(url, data).toPromise();
    console.log(result);

    if (result.opr) {
      this.router.navigate(['signup']);
      this.invalidcred = true;
      this.fbFormGroup.reset();

    }


    else {
      const url2 = "http://localhost:3200/addusers";
      const result = await this.http.post(url2, data).toPromise();
      console.log(result);
      this.fbFormGroup.reset();
      this.router.navigate(['login']);


    }
  }
}




