import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {AuthRoutingModule} from './auth.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {OnboardComponent} from './components/onboard/onboard.component';


@NgModule({
  declarations: [
    LoginComponent,
    OnboardComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {
}