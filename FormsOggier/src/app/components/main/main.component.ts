import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/Alumno.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  listaAlumnos: Alumno[] = [];
  formularioAlumno!: FormGroup;

  constructor(public form: FormBuilder) {
    this.formularioAlumno = form.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      fechaIngreso: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)])
    })
  }

  ngOnInit(): void {
  }

  guardarAlumno(){
    console.log(this.formularioAlumno);
    let p: Alumno = this.formularioAlumno.value;
    this.formularioAlumno.reset();
    this.listaAlumnos.push(p);
  }

}
