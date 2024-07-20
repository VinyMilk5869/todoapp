import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Esta es la variable que dice te amo amorcito';

  tasks = [
    'Mucho',
    'Mucho',
    'Mucho',
    'Mucho',
    'Mucho',
    'Mucho',
    'Mucho',
    'Mucho',
    'Mucho',
    'Mucho'
  ]
  name = "Santiago";
  age= 23;
  nroProyecto=1;
  disabled = false;
  img="https://w3schools.com/howto/img_avatar.png";
  alt="";

  person={
    name:"Santiago",
    age:23,
    nroProyecto:1,
    avatar:"https://w3schools.com/howto/img_avatar.png"
  }

  clickHandler() {
    alert("ALERTA")
  }
  changeHandler(event: Event) {
    console.log(event);
  }
  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
