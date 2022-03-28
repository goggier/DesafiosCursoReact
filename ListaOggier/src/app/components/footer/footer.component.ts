import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  autor: Autor = new Autor();

  constructor() { 
      this.autor.nombre = 'German';
      this.autor.apellido = 'Oggier';
   }

  ngOnInit(): void {
  }

}
