import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  mostrarCompleto: boolean = false;
  agentesValorant = this.getAgentesValorant();
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.agentesValorant);
  }

  mensaje(agente: any) {
    Swal.fire(`entraste al detalle del agente: ${agente.titulo}`);
  }

  getAgentesValorant(): any {
    const arrayAgentesValorant = [
      {
        "id" : 1,
        "titulo" : "Astra",
        "imagen" : "https://media.vandal.net/i/620x337/3-2021/2021331044047_1.jpg",
        "clase" : "Controlador.",
        "nacionalidad": "Ghana.",
        "descripcion" : "Astra controla las energías del cosmos para dar forma al campo de batalla a su antojo. Con pleno dominio de su forma astral y un gran talento para la anticipación estratégica, siempre va eones por delante de los movimientos de sus enemigos"
      },
      {
        "id" : 2,
        "titulo" : "Jett",
        "imagen" : "https://media.vandal.net/i/620x288/5-2020/20205412405084_5.jpg",
        "clase" : "Duelista.",
        "nacionalidad": "Corea.",
        "descripcion" : "Jett es una duelista muy versátil que encantará a los jugadores que buscan velocidad de movimiento y evasión dentro de Valorant.Sus habilidades le otorgan una movilidad por los mapas más alta que los otros personajes."
      },
      {
        "id" : 3,
        "titulo" : "Killjoy",
        "imagen" : "https://media.vandal.net/i/620x277/8-2020/20208511232930_1.jpg",
        "clase" : "Centinela.",
        "nacionalidad": "Alemania.",
        "descripcion" : "Killjoy es una centinela y una genio que posee un arsenal de inventos entre los que se encuentran unos bots muy interesantes. Sus capacidades la hacen una muy buena opción de cara a asegurar el campo de batalla con facilidad."
      },
      {
        "id" : 4,
        "titulo" : "Omen",
        "imagen" : "https://media.vandal.net/i/620x288/5-2020/20205412405084_6.jpg",
        "clase" : "Controlador.",
        "nacionalidad": "Desconocida.",
        "descripcion" : "Omen es una especie de cazador de las sombras que puede ser muy escurridizo en manos hábiles. Especialmente útil si se trabaja en equipo, y un personaje bastante ofensivo con el que hay que tener mucho cuidado si se encuentra en el campo de batalla."
      },
      {
        "id" : 5,
        "titulo" : "Reyna",
        "imagen" : "https://media.vandal.net/i/620x260/6-2020/2020621303636_1.jpg",
        "clase" : "Duelista.",
        "nacionalidad": "México.",
        "descripcion" : "Reyna es una duelista con una capacidad ofensiva muy considerable, capaz de aprovecharse de los orbes que producen sus enemigos muertos para recuperar vida, volverse intangible o incluso invisible al combinar sus habilidades con cabeza."
      },
      {
        "id" : 6,
        "titulo" : "Raze",
        "imagen": "https://media.vandal.net/i/620x288/5-2020/20205412405084_8.jpg",
        "clase" : "Duelista.",
        "nacionalidad": "Brasil.",
        "descripcion" : "Raze es otra duelista que, como tal, funciona especialmente en la línea más ofensiva de las rondas. Úsala cuando quieras abrir paso a tu equipo y atacar fuertemente sin descanso ni piedad para tus enemigos."
      },
      {
        "id" : 7,
        "titulo" : "Sage",
        "imagen" : "https://media.vandal.net/i/620x288/5-2020/20205412405084_9.jpg",
        "clase" : "Centinela.",
        "nacionalidad": "China.",
        "descripcion" : "Sage es el personaje sanador o médico de Valorant. Sus habilidades están centradas en la defensa y la curación tanto propia como de compañeros de equipo, e incluso en la reanimación de los caídos."
      },
      {
        "id" : 8,
        "titulo" : "Skye",
        "imagen" : "https://media.vandal.net/i/620x337/10-2020/2020102910391795_1.jpg",
        "clase" : "Iniciador.",
        "nacionalidad": "Australia.",
        "descripcion" : "Astra controla las energías del cosmos para dar forma al campo de batalla a su antojo. Con pleno dominio de su forma astral y un gran talento para la anticipación estratégica, siempre va eones por delante de los movimientos de sus enemigos."
      },
      {
        "id" : 9,
        "titulo" : "Sova",
        "imagen" : "https://media.vandal.net/i/620x288/5-2020/20205412405084_10.jpg",
        "clase" : "Iniciador.",
        "nacionalidad": "Rusia.",
        "descripcion" : "Sova es un personaje ideado para los jugadores más 'rastreadores'. Gracias a sus habilidades y su arco podrás ir siempre un paso por delante de tus enemigos, ya que puedes hacer volar un dron para buscar y marcar oponentes."
      },
      {
        "id" : 10,
        "titulo" : "Yoru",
        "imagen" : "https://media.vandal.net/i/620x267/1-2021/20211139411031_1.jpg",
        "clase" : "Duelista.",
        "nacionalidad": "Japón.",
        "descripcion" : "Yoru abre agujeros en el tejido de la realidad para infiltrarse tras las líneas enemigas sin ser visto. Utiliza el engaño y la agresividad por igual para acabar con sus objetivos antes de que sepan qué ha pasado."
      }
    ]
    return arrayAgentesValorant;
  }

}
