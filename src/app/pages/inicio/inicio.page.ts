import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Post } from 'src/app/interfaces/post';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PublicacionesService, public alertController: AlertController) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.obtenerPosts().subscribe(
      resp => {
        console.log(resp);
        this.posts = resp;        
      }, error => {
        console.log(error);
      }
    )
  }
}
