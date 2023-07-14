import React from "react";
import { Table, Button, Container } from "reactstrap";
class TablaPersonajes extends React.Component {
  render() {
    return (
      <Container>
        <br />
        <Button color="outline-success" onClick={this.props.mostrarModalInsertar}>
          Crear
        </Button>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Personaje</th>
              <th>Anime</th>
              <th>Capitulo</th>
              <th>Numero</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {this.props.data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.personaje}</td>
                <td>{dato.anime}</td>
                <td>{dato.capitulo}</td>
                <td>{dato.numero}</td>
                <td>
                  <Button color="outline-info" onClick={() => this.props.mostrarModalActualizar(dato)}>
                    Editar
                  </Button>{" "}
                  <Button color="outline-danger" onClick={() => this.props.eliminar(dato)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default TablaPersonajes;