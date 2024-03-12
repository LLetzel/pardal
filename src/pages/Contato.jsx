//import Menu from "./Menu";
import Form from 'react-bootstrap/Form';
import Menu from './Menu';

function Contato() {
  return (
    <div >
      <Menu/>
    <Form id="form">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email: </Form.Label> 
        <Form.Control type="email" placeholder="name@example.com" className="center"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Telefone: </Form.Label> 
        <Form.Control type="telefone" className="center"/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comentários:</Form.Label>
        <Form.Control placeholder="deixe seu comentário aqui" as="textarea" rows={3} />
      </Form.Group>
      <button>Enviar</button>
    </Form>
  
    </div>
  )}

export default Contato;