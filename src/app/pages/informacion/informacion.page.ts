import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PublicacionesService) { }

  ngOnInit() {
    this.informacion();
  }

  informacion() {
    this.postsService.filter(2).subscribe(
      resp => {
        console.log(resp);
        this.posts = resp;
        
      }, error => {
        console.log(error);
        
      }
    )
  }

}
