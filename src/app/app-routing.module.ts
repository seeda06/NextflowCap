import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckcmComponent } from './checkcm/checkcm.component';
import { CommentComponent } from './comment/comment.component';
import { driverdayComponent } from './driverday/driverday.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { TimecarComponent } from './timecar/timecar.component';
import { TimelateComponent } from './timelate/timelate.component';
import { TimelatemnComponent } from './timelatemn/timelatemn.component';




const routes: Routes = [
  {
    path:'',pathMatch:'full', redirectTo:'login'
  },
  {
    path: 'home',component:HomeComponent,
    
    
  }, {
    path: 'login',component:LoginComponent,
  },
  {
    path: 'comment',component:CommentComponent,
  }
  ,
  {
    path: 'checkcm',component:CheckcmComponent,
  }
  ,
  {
    path: 'driverday',component:driverdayComponent,
  }
  ,
  {
    path: 'timecar',component:TimecarComponent,
  }
  ,
  {
    path: 'timelate',component:TimelateComponent,
  }
  ,
  {
    path: 'manage',component:ManageComponent,
  }
  ,
  {
    path: 'timelatemn',component:TimelatemnComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
