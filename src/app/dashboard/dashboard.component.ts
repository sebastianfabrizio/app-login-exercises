import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private auth: AuthService, private active: ActivatedRoute, private router: Router){}


  irHome(){
    this.router.navigate(["home"], {relativeTo:this.active})
  }
  irEstado(){
    this.router.navigate(["estado"], {relativeTo:this.active})
  }
  irCurso(){
    this.router.navigate(["curso"], {relativeTo:this.active})
  }
  irPost(){
    this.router.navigate(["post"], {relativeTo:this.active})
  }

  logout(){
    this.auth.logout()
    this.router.navigate(["login"])
  }
}
