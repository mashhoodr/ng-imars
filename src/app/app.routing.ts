import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { TalkComponent } from './talk/talk.component';
import { VideoComponent } from './video/video.component';
// TODO remove these components
// import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
// import { LoginComponent } from './login/login.component';

// Lazy loading loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: '', component: ProfileComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'talk', component: TalkComponent },
  { path: 'video', component: VideoComponent },
  { path: 'profile', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
