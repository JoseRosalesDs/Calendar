import React from "react";
export default ({ addTask }) => {
  return (
    <div>
      <div id='calendario'>
        <div id='anterior'></div>
        <div id='posterior'></div>
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
        <div id='recordatorio'>
          <table id='semana'>
            <tr>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miercoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sábado</th>
              <th>Domingo</th>
            </tr>
            <tr id='tasks'>
              <th>
                <ul>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </table>
          <div id='task'>
            <h4>Añadir tareas</h4>
            <br />
            <form onSubmit={(e) => addTask(e)}>
              <label htmlFor='dias'>Dia de la semana: </label>
              <select name='dias'>
                <option value='tareasLunes'>Lunes</option>
                <option value='tareasMartes'>Martes</option>
                <option value='tareasMiercoles'>Miercoles</option>
                <option value='tareasJueves'>Jueves</option>
                <option value='tareasViernes'>Viernes</option>
                <option value='tareasSabado'>Sábado</option>
                <option value='tareasDomingo'>Domingo</option>
              </select>
              <br />
              <br />
              <label htmlFor='boton'>Tarea: </label>
              <input id='tareaInput' type='text' />
              <br /> <br />
              <input type='submit' value='Añadir tarea' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
