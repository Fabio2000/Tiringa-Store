import styles from '../style/styles.module.css'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';
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
                        <Container className='col-12'>
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
                    </Col>
                </div>
                <Col style={{ textAlign: 'end' }}>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle style={{ backgroundColor: 'transparent', borderColor: 'transparent' }} ><Image src={person} width={50} height={50} /></DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href='/perfil'>Perfil</DropdownItem>
                            <DropdownItem href='/carinho'>Carinho</DropdownItem>
                            <DropdownItem href='/historico'>Histórico</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
            </Nav>
            <Carousel fade className={styles.corousel} style={{ textAlignLast: 'center', marginBottom: '100px' }}>
                    <Carousel.Item interval={1000}>
                        <Image
                            src={bemvindo}
                            width={990}
                            height={250}
                            className="d-block w-100"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <Image
                            src={promo}
                            width={990}
                            height={250}
                            className="d-block w-100"
                            alt="Two slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <Image
                            src={inaugura}
                            width={990}
                            height={250}
                            className="d-block w-100"
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            <div class="row" style={{ justifyContent: 'center', paddingTop: '1px', paddingBottom: '20px' }} className={styles.cards}>
                <Col sm="3">
                    <Card body>
                        <Image src={feminino} width={190} height={290} />
                        <h4>Acesse a área Feminina</h4>
                        <CardText>Visite nossa área excluisiva para Mulheres empoderadas.</CardText>
                        <Button class="btn btn-success" href="/feminino">Visite já</Button>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card body>
                        <Image src={masculino} width={190} height={290} />
                        <h4>Acesse a área Maculina</h4>
                        <CardText>Visite nossa área excluisiva para Homens fortes como o tiringa.</CardText>
                        <Button class="btn btn-success" href="/masculino">Visite já</Button>
                    </Card>
                </Col>
            </div>
        </Col >
    )
}
