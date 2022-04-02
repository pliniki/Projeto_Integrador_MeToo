import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrarUsuario() {
    this.auth.Entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      this.router.navigate(['/pagina-inicial'])

    }, erro => {
      if (erro.status == 500) {
        alert('Usuario ou senha errado!')
      }

    })
  }
}  