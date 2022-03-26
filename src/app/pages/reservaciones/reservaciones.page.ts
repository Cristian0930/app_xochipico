import { Component, OnInit } from '@angular/core';
import { VisitResponse } from 'src/app/interfaces/visit';
import { AgendacionesService } from 'src/app/services/agendaciones.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.page.html',
  styleUrls: ['./reservaciones.page.scss'],
})
export class ReservacionesPage implements OnInit {

  visitas: VisitResponse[] = [];

  constructor(private agendar: AgendacionesService) { }

  ngOnInit() {
    this.obtenerVisitas();
  }

  obtenerVisitas() {
    this.agendar.getVisit().subscribe(
      resp => {
        console.log(resp);
        this.visitas = resp;
        
      }, error => {
        console.log(error);
      }
    )
  }

}
