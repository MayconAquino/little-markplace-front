import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  standalone: true,
  imports: [MatButtonModule, FormsModule]
})
export class PeopleComponent {
  private apiUrl = 'http://localhost:8080/api/persons';
  person = {
    nome: '',
    cpf: '',
    endereco: '',
    cargo: ''
  };


  constructor(private router: Router, private http: HttpClient) { }


  callBack(): void {
    this.router.navigate(['/home']);
  }

  submitPerson() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post(this.apiUrl, this.person, { headers }).subscribe({
      next: (response) => {
        console.log('Resposta recebida:', response);
        this.callBack();
      },
      error: (error) => console.error('Erro ao enviar pessoa:', error)
    });
    }
}
