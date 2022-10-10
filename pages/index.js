import styles from '../style/styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Card, CardBody, Form, Label, Input, CardText } from 'reactstrap';
import Image from 'next/image'
import tiringalogin from '../public/imagens/Tiringa.png';


export default function Home() {
  return (
    <Row className={styles.boxDegrade}>
      <Col class="col-sm-4">
        <Container className={styles.CardOne}>
          <h1>Registre-se</h1>
          <Form action="/api/register" method="post">
            <Input type='email' name='email' placeholder='Escreva seu e-mail'></Input><br /><br />
            <Input type='text' name='text' placeholder='Digite seu nome'></Input><br /><br />
            <Input type='password' name='password' placeholder='Digite sua senha'></Input><br /><br />
            <Button type='submit' className={styles.btnUm}>Registrar</Button>
          </Form>
        </Container>

      </Col>
        <Col class="col-sm-4">
          <Container className={styles.CardTwo}>
                <h1 >Login</h1>
              <Form action="/api/login" method="post">
                <Input type='email' name='email' placeholder='Digite seu e-mail'></Input><br /><br />
                <Input type='password' name='password' placeholder='Digite sua senha'></Input><br /><br />
                <Button type='submit' color='success' size='md' className={styles.btnDois}>ENTRAR</Button>
              </Form>
          </Container>
        </Col>
        <Image src={tiringalogin} width={200} height={200} placeholder="blur" class='tiringalogin'/>
    </Row>
  )
}