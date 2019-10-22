import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ParentComponent } from './components/parent/parent.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { P1Component } from './components/p1/p1.component';


const routes: Routes = [
  {
    path:'', 
    redirectTo: '/test1',
    pathMatch: 'full'
  },
  {
    path:'test1', 
    component: Test1Component
  },
  {
    path:'test2', 
    component: Test2Component
  },
  {
    path:'home', 
    component: HomeComponent
  },
  {
    path:'aboutus',
    component: AboutusComponent
  },
  {
    path:'parent',
    component: ParentComponent
  },
  {
    path:'demo1',
    component: Demo1Component
  },
  {
    path:'p1',
    component: P1Component
  },
  {
    path:'**', 
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
