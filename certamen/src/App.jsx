import React from "react";
import TablaPersonajes from "./componentes/TablaPersonajes";
import ModalPersonajes from "./componentes/ModalPersonajes";

class App extends React.Component {
  state = {
    data: [],
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      personaje: "",
      anime: "",
      capitulo: "",
      numero: ""
    },
  };

  componentDidMount() {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      this.setState({ data: JSON.parse(storedData) });
    } else {
    }
  }

  guardarDataEnLocalStorage = () => {
    localStorage.setItem("data", JSON.stringify(this.state.data));
  };
  
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].personaje = dato.personaje;
        arreglo[contador].anime = dato.anime;
        arreglo[contador].capitulo = dato.capitulo;
        arreglo[contador].numero = dato.numero;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false }, this.guardarDataEnLocalStorage);
  };

  eliminar = (dato) => {
    var opcion = window.confirm("¿Está seguro que deseas eliminarlo? " + dato.id);
    if (opcion) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false }, this.guardarDataEnLocalStorage);
    }
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista }, this.guardarDataEnLocalStorage);
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <TablaPersonajes
          className="index"
          data={this.state.data}
          mostrarModalInsertar={this.mostrarModalInsertar}
          mostrarModalActualizar={this.mostrarModalActualizar}
          eliminar={this.eliminar}
        />

        <ModalPersonajes
          className="index"
          isOpen={this.state.modalActualizar}
          modalTitle="Editar Registro"
          form={this.state.form}
          handleChange={this.handleChange}
          onSubmit={() => this.editar(this.state.form)}
          onCancel={this.cerrarModalActualizar}
          submitButtonText="Editar"
        />

        <ModalPersonajes
          className="index"
          isOpen={this.state.modalInsertar}
          modalTitle="Inserción de Datos"
          form={this.state.form}
          handleChange={this.handleChange}
          onSubmit={this.insertar}
          onCancel={this.cerrarModalInsertar}
          submitButtonText="Insertar"
        />
      </>
    );
  }
}

export default App;