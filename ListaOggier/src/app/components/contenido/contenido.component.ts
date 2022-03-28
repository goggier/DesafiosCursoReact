import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/Alumno.interface';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  listaAlumnos: Alumno[] = this.getAlumnos();
  revertido: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  getClass(alumno : Alumno) {
    let classes = '';
    if (this.revertido && alumno.edad < 24) {
      classes = 'alumnoMayor';
    }else{
      if (this.revertido === false && alumno.edad > 24) {
        classes = 'alumnoMayor';
      }
    }
    return classes;
  }

  revertirCondicionTabla() {
    if (this.revertido){
      this.revertido = false;
    }else{
      this.revertido = true;
    }
  }

  getAlumnos(): Alumno[] {
    let listaAlumnos : Alumno[] = [
      {
        nombre : 'German',
        apellido: 'Oggier',
        edad: 25,
        fechaIngreso: '19/11/2021',
        celular: '03535643972',
        email: 'german.oggier19@gmail.com'
      },
      {
        nombre : 'Gaspar',
        apellido: 'Santillan',
        edad: 24,
        fechaIngreso: '11/12/2021',
        celular: '03534656774',
        email: 'german.zantilla@gmail.com'
      },
      {
        nombre : 'Gianni',
        apellido: 'Tiezzi',
        edad: 25,
        fechaIngreso: '19/10/2021',
        celular: '03535447654',
        email: 'giannitiezzi@gmail.com'
      },
      {
        nombre : 'Mateo',
        apellido: 'Digliodo',
        edad: 26,
        fechaIngreso: '12/11/2021',
        celular: '0353576345',
        email: 'mateo.digliodo@gmail.com'
      },
      {
        nombre : 'Rodrigo',
        apellido: 'Camana',
        edad: 21,
        fechaIngreso: '9/09/2021',
        celular: '03535234434',
        email: 'rodrigo.camana@gmail.com'
      },
      {
        nombre : 'Pablo',
        apellido: 'Olivo',
        edad: 23,
        fechaIngreso: '1/01/2022',
        celular: '03534628973',
        email: 'pablo.olivo@gmail.com'
      },
      {
        nombre : 'Federico',
        apellido: 'Olivo',
        edad: 22,
        fechaIngreso: '19/10/2021',
        celular: '03533456789',
        email: 'federico.olivo@gmail.com'
      },
      {
        nombre : 'Nora',
        apellido: 'Panero',
        edad: 28,
        fechaIngreso: '15/11/2021',
        celular: '03535633789',
        email: 'nora.panero@gmail.com'
      },
      {
        nombre : 'Melany',
        apellido: 'Ankovic',
        edad: 23,
        fechaIngreso: '11/12/2021',
        celular: '03534321345',
        email: 'mel.ankovic@gmail.com'
      },
      {
        nombre : 'Luna',
        apellido: 'Oggier',
        edad: 30,
        fechaIngreso: '10/07/2021',
        celular: '03534654789',
        email: 'luna.oggier@gmail.com'
      },
      {
        nombre : 'Agustin',
        apellido: 'Artico',
        edad: 24,
        fechaIngreso: '11/08/2021',
        celular: '03535432234',
        email: 'agu.artico@gmail.com'
      },
      {
        nombre : 'Rocio',
        apellido: 'Perez',
        edad: 32,
        fechaIngreso: '11/09/2021',
        celular: '03534789123',
        email: 'rocioperez@gmail.com'
      }
    ]
    return listaAlumnos;
  }

}
