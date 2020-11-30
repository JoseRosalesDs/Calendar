import React from "react";
import { connect } from "react-redux";
import App from "../Components/app";

var primeromes = null;
var mescal = null;
var annocal = null;

class appContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meses: [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ],
      laSemana: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ],
      diasSemana: ["lun", "mar", "mié", "jue", "vie", "sáb", "dom"],
      mesActual: null,
      tareasLunes: {},
      tareasMartes: {},
      tareasMiercoles: {},
      tareasJueves: {},
      tareasViernes: {},
      tareasSabado: {},
      tareasDomingo: {},
    };
    this.cabecera = this.cabecera.bind(this);
    this.primeralinea = this.primeralinea.bind(this);
    this.escribirdias = this.escribirdias.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  //Tras cargarse la página ...
  componentDidMount() {
    //fecha actual
    let hoy = new Date(); //objeto fecha actual
    let diasemhoy = hoy.getDay(); //dia semana actual
    let diahoy = hoy.getDate(); //dia mes actual
    let meshoy = hoy.getMonth(); //mes actual
    let annohoy = hoy.getFullYear(); //año actual

    // Elementos del DOM: en cabecera de calendario
    var tit = document.getElementById("titulos"); //cabecera del calendario
    var ant = document.getElementById("anterior"); //mes anterior
    var pos = document.getElementById("posterior"); //mes posterior

    // Elementos del DOM en primera fila
    var f0 = document.getElementById("fila0");

    // //Pie de calendario
    // let pie = document.getElementById("fechaactual");
    // pie.innerHTML +=
    //   this.state.laSemana[diasemhoy] +
    //   ", " +
    //   diahoy +
    //   " de " +
    //   this.state.meses[meshoy] +
    //   " de " +
    //   annohoy;

    //formulario: datos iniciales:
    // document.buscar.buscaanno.value = annohoy;

    // Definir elementos iniciales:
    mescal = meshoy; //mes principal
    annocal = annohoy; //año principal
    //iniciar calendario:
    this.cabecera(tit, ant, pos, mescal, annocal);
    this.primeralinea(f0);
    this.escribirdias(annocal, mescal, meshoy, diahoy, annohoy);
  }

  //FUNCIONES de creación del calendario:
  //cabecera del calendario
  cabecera(tit, ant, pos, mescal, annocal) {
    tit.innerHTML = this.state.meses[mescal] + " de " + annocal;
    let mesant = mescal - 1; //mes anterior
    let mespos = mescal + 1; //mes posterior
    if (mesant < 0) {
      mesant = 11;
    }
    if (mespos > 11) {
      mespos = 0;
    }
    ant.innerHTML = this.state.meses[mesant];
    pos.innerHTML = this.state.meses[mespos];
  }

  //primera línea de tabla: días de la semana.
  primeralinea(f0) {
    for (let i = 0; i < 7; i++) {
      let celda0 = f0.getElementsByTagName("th")[i];
      celda0.innerHTML = this.state.diasSemana[i];
    }
  }

  //rellenar celdas con los días
  escribirdias(annocal, mescal, meshoy, diahoy, annohoy) {
    //Buscar dia de la semana del dia 1 del mes:
    primeromes = new Date(annocal, mescal, "1"); //buscar primer día del mes
    let prsem = primeromes.getDay(); //buscar día de la semana del día 1
    prsem--; //adaptar al calendario español (empezar por lunes)
    if (prsem == -1) {
      prsem = 6;
    }
    //buscar fecha para primera celda:
    let diaprmes = primeromes.getDate();
    let prcelda = diaprmes - prsem; //restar días que sobran de la semana
    let empezar = primeromes.setDate(prcelda); //empezar= tiempo UNIX 1� celda
    let diames = new Date(); //convertir en fecha
    diames.setTime(empezar); //diames=fecha primera celda.

    //Recorrer las celdas para escribir el día:
    for (let i = 1; i < 7; i++) {
      //localizar fila
      let fila = document.getElementById("fila" + i);
      for (let j = 0; j < 7; j++) {
        let midia = diames.getDate();
        let mimes = diames.getMonth();
        let mianno = diames.getFullYear();
        let celda = fila.getElementsByTagName("td")[j];
        celda.innerHTML = midia;
        //Recuperar estado inicial al cambiar de mes:
        celda.style.backgroundColor = "#9bf5ff";
        celda.style.color = "#492736";
        //domingos en rojo
        if (j == 6) {
          celda.style.color = "#023e8a";
        }
        //dias restantes del mes en gris
        if (mimes != mescal) {
          celda.style.color = "#00b4d8";
        }
        //destacar la fecha actual
        if (mimes == meshoy && midia == diahoy && mianno == annohoy) {
          celda.style.backgroundColor = "#00b4d8";
          celda.innerHTML = "<cite title='Fecha Actual'>" + midia + "</cite>";
        }
        //pasar al siguiente día
        midia = midia + 1;
        diames.setDate(midia);
      }
    }
  }
  addTask(e) {
    e.preventDefault();
    let taskDay = e.target[0].value;
    let newTask = e.target[1].value;
  }
  render() {
    return (
      <div>
        <App addTask={this.addTask} />
      </div>
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  return {};
};

export default connect(mapStateToProps, null)(appContainer);
