import React from "react";
import { Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, Button } from "reactstrap";
class ModalPersonaje extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen}>
        <ModalHeader>
          <div>
            <h3>{this.props.modalTitle}</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>
            <input className="form-control" readOnly type="text" value={this.props.form.id} />
          </FormGroup>

          <FormGroup>
            <label>Personaje:</label>
            <input
              className="form-control"
              name="personaje"
              type="text"
              onChange={this.props.handleChange}
              value={this.props.form.personaje}
            />
          </FormGroup>

          <FormGroup>
            <label>Anime:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              onChange={this.props.handleChange}
              value={this.props.form.anime}
            />
          </FormGroup>
          <FormGroup>
            <label>Capítulo:</label>
            <input
              className="form-control"
              name="capitulo"
              type="text"
              onChange={this.props.handleChange}
              value={this.props.form.capitulo}
            />
          </FormGroup>
          <FormGroup>
            <label>Número:</label>
            <input
              className="form-control"
              name="numero"
              type="number"
              onChange={this.props.handleChange}
              value={this.props.form.numero}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={this.props.onSubmit}>
            {this.props.submitButtonText}
          </Button>
          <Button color="danger" onClick={this.props.onCancel}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalPersonaje;