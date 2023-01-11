import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {
  questions: any[] = [
    {user: 'Usuario', pic: '../../../assets/images/img_placeholder.jpg', time: 'Hace 1 hora', question: 'Pregunta hecha por usuario', responses: 3},
    {user: 'Usuario', pic: '../../../assets/images/img_placeholder.jpg', time: 'Hace 2 horas', question: 'Pregunta hecha por usuario', responses: 1},
    {user: 'Usuario', pic: '../../../assets/images/img_placeholder.jpg', time: 'Hace 2 horas', question: 'Pregunta hecha por usuario', responses: 5},
    {user: 'Usuario', pic: '../../../assets/images/img_placeholder.jpg', time: 'Hace 5 horas', question: 'Pregunta hecha por usuario', responses: 9},
    /* {user: 'Usuario', pic: '../../../assets/images/img_placeholder.jpg', time: 'Hace 6 horas', question: 'Pregunta hecha por usuario', responses: 0},
    {user: 'Usuario', pic: '../../../assets/images/img_placeholder.jpg', time: 'Hace 7 horas', question: 'Pregunta hecha por usuario', responses: 0},
    {user: 'Usuario', pic: '../../../assets/images/img_placeholder.jpg', time: 'Hace 8 horas', question: 'Pregunta hecha por usuario', responses: 0}, */
  ]
}
