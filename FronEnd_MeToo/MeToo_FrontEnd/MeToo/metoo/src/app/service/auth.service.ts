import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { UserLogin } from "../model/UserLogin";
import { Usuario } from "../model/Usuario";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  entrarUsuario(userLogin: UserLogin) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  Entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin);
  }

  Cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario);
  }
  atualizar(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('http://localhost:8080/atualizar', usuario)
      }
  
  getByIdUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`)
  }
  Logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }
}
