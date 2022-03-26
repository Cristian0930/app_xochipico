import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PublicacionesService) { }

  ngOnInit() {
    this.promociones();
  }

  promociones() {
    this.postsService.filter(1).subscribe(
      resp => {
        console.log(resp);
        this.posts = resp;
        
      }, error => {
        console.log(error);
        
      }
    )
  }

}
