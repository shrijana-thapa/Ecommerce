// import { Component } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormService } from '../../Services/form/formService';

// @Component({
//   selector: 'app-login',
//   standalone: false,
//   templateUrl: './login.html',
//   styleUrl: './login.scss'
// })
// export class Login implements OnInit{

//   loginForm!: FormGroup;

//   constructor(private fb: FormBuilder,private router : Router,private formService:FormService) {}

//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }

//   onSubmit(): void {
  
//    const loginValue=this.loginForm.value;
//     const signupValue=this.formService.getUserData();
//    if(!signupValue){
//     alert("No account found.Please signup first");
//     this.router.navigate(['/signup']);
//     return;
//    }

  
//    if(signupValue.email === loginValue.email && signupValue.password===loginValue.password){
//     this.router.navigate(['/dashboard']);
//     return;
//    }
//    else{
//     alert('Invalid credentials');
//    }
//   }

// }

