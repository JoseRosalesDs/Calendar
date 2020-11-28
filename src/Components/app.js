import React from "react";
export default () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div id='calendario'>
        <div id='anterior' onClick='mesantes()'></div>
        <div id='posterior' onClick='mesdespues()'></div>
        <h2 id='titulos'></h2>
        <table id='diasc'>
          <tr id='fila0'>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr id='fila1'>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr id='fila2'>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr id='fila3'>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr id='fila4'>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr id='fila5'>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr id='fila6'>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <div id='fechaactual'>
          <i onclick='actualizar()'>HOY: </i>
        </div>
        <div id='buscafecha'>
          <form action='#' name='buscar'>
            <p>
              Buscar ... MES
              <select name='buscames' style={{ margin: "0px 5px" }}>
                <option value='0'>Enero</option>
                <option value='1'>Febrero</option>
                <option value='2'>Marzo</option>
                <option value='3'>Abril</option>
                <option value='4'>Mayo</option>
                <option value='5'>Junio</option>
                <option value='6'>Julio</option>
                <option value='7'>Agosto</option>
                <option value='8'>Septiembre</option>
                <option value='9'>Octubre</option>
                <option value='10'>Noviembre</option>
                <option value='11'>Diciembre</option>
              </select>
              ... AÑO ...
              <input
                type='text'
                name='buscaanno'
                maxlength='4'
                size='4'
                style={{ margin: "0px 5px" }}
              />
              ...
              <input
                type='button'
                value='BUSCAR'
                onclick='mifecha()'
                style={{ margin: "0px 5px" }}
              />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
