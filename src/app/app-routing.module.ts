import {createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PowerComponent } from './power/power.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { StarsComponent } from './stars/stars.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TypicodeComponent } from './typicode/typicode.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard], children: [
      { path: 'calculator', component: CalculatorComponent },
      { path: 'interpolation', component: InterpolationComponent },
      { path: 'event-binding', component: EventBindingComponent },
      { path: 'two-way-binding', component: TwoWayBindingComponent },
      { path: 'rectangle', component: RectangleComponent },
      { path: 'square', component: SquareComponent },
      { path: 'power', component: PowerComponent },
      { path: 'event-registration', component: EventRegistrationComponent },
      { path: 'employee-registration', component: EmployeeRegistrationComponent },
      { path: 'cart', component: CartComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'stars', component: StarsComponent },
      { path: 'cars', component: CarsComponent },
      {path:'gpay',component:GpayComponent},
      {path:'bank',component:BankComponent},
      {path:'vehicle',component:VehicleComponent,canDeactivate:[NotifyGuard]},
      {path:'typicode',component:TypicodeComponent},
      {path:'mail',component:MailComponent},
      {path:'flipkart',component:FlipkartComponent},
      {path:'bank-details/:id',component:BankDetailsComponent},
      {path:'create-account',component:CreateAccountComponent,canDeactivate:[NotifyGuard]},
      {path:'create-user',component:CreateUserComponent},
      {path:'create-product',component:CreateProductComponent}
    ]
  },

  { path:"", component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


