import styles from '../style/styles.module.css'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, Row, Col, Card, Form, Input, CardText, CardTitle, Container } from 'reactstrap';
import Image from 'next/image'
import cearense from '../public/imagens/cearense.png';
import person from '../public/imagens/person.png';
import promo from '../public/imagens/promocao.png'
import bemvindo from '../public/imagens/bemvindo.jpg'
import inaugura from '../public/imagens/inaugura.jpeg'
import feminino from '../public/imagens/feminino.jpeg'
import masculino from '../public/imagens/masculino.jpeg'
import { faTextWidth } from '@fortawesome/free-solid-svg-icons';
import { disconnect, version } from 'mongoose';



export default function () {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Col className={styles.teste}>
<Nav className="navbar navbar-expand navbar-dark bg-dark col-12">
                <div id="informa" className={styles.informa}>
                    <div>
                        <a className="navbar-brand" href="home"><Image src={cearense} width={60} height={60} /></a>
                    </div>
                    <Col className="collapse navbar-collapse">
                        <Container className='col-6'>
                            <Col className="">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/home">Pagina inicial</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/produtos">Produtos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/criadores">Criadores</a>
                                    </li>
                                </ul>
                            </Col>
                        </Container>
                        <Container className='col-6'>
                            <div id="botao" className={styles.botao}>
                                <Form className="form-inline">
                                    <ul class="navbar-nav mr-auto">
                                        <Input className="form-control"
                                            type="search" placeholder="Procure seu produto" />
                                        <li className={styles.procura} class="nav-item">
                                            <button class="btn btn-outline-info" type="submit">Procurar</button>
                                        </li>
                                    </ul>
                                </Form>
                            </div>
                        </Container>
                        <Col className='col-7' style={{ textAlignLast:'end'}}>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle  style={{backgroundColor:'transparent', borderColor:'transparent'}} ><Image src={person} width={50} height={50} /></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href='/perfil'>Perfil</DropdownItem>
                                    <DropdownItem href='/carinho'>Carinho</DropdownItem>
                                    <DropdownItem href='/historico'>Histórico</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </Col>
                </div>
            </Nav>
        </Col>
    )
}
