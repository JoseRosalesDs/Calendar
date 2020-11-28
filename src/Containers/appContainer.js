import React from "react";
import { connect } from "react-redux";
import App from "../Components/app";

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
      // titulo: "",
      // mesAnterior: "",
      // mesPosterior: "",
    };
    this.cabecera = this.cabecera.bind(this);
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
    // var f0 = document.getElementById("fila0");

    //Pie de calendario
    let pie = document.getElementById("fechaactual");
    pie.innerHTML +=
      this.state.laSemana[diasemhoy] +
      ", " +
      diahoy +
      " de " +
      this.state.meses[meshoy] +
      " de " +
      annohoy;

    //formulario: datos iniciales:
    document.buscar.buscaanno.value = annohoy;

    // Definir elementos iniciales:
    let mescal = meshoy; //mes principal
    let annocal = annohoy; //año principal
    //iniciar calendario:
    this.cabecera(tit, ant, pos, mescal, annocal);
    // primeralinea();
    // escribirdias();
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

  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  return {};
};

export default connect(mapStateToProps, null)(appContainer);
