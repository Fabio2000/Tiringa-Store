import styles from '../style/styles.module.css'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, Modal, Col, Card, Form, Input, CardText, CardTitle, Container } from 'reactstrap';
import Image from 'next/image'
import cearense from '../public/imagens/cearense.png';
import person from '../public/imagens/person.png';
import promo from '../public/imagens/promocao.png'
import bemvindo from '../public/imagens/bemvindo.jpg'
import inaugura from '../public/imagens/inaugura.jpeg'
import fem from '../public/imagens/feminina/fem.png'

import femin1 from '../public/imagens/femininoTiringa.png'
import femin2 from '../public/imagens/fTiringa.png'
import femin3 from '../public/imagens/fTiringa1.PNG'


export default function () {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [modalOpen, setModalOpen] = React.useState(false)

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
            <div>
                <Carousel className={styles.corousel}>
                    <div>
                        <Image src={fem} width={990} height={250} alt="imagem1" />

                    </div>

                    <div>
                        <Image src={promo} width={990} height={300} alt="imagem2" />

                    </div>

                    <div>
                        <Image src={inaugura} width={990} height={250} alt="imagem3" />

                    </div>

                </Carousel>
            </div>
            <div class="row" style={{ justifyContent: 'center', paddingTop: '1px', paddingBottom: '20px' }} className={styles.cards}>

                <Col sm="3">
                    <Card body>
                        <Image src={femin1} />
                        <br />
                        <h4>Promoção Feminina</h4>
                        <CardText>Conjunto lançamento tiringa Store só para mulheres, body e calça.</CardText>
                        <br />
                        <Button class="btn btn-warning" href="/item">R$ 79,99</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body>
                        <Image src={femin2} />
                        <br />
                        <h4>Body´s Feminino multiplas cores</h4>
                        <CardText>Body femino com diferentes tamanhos e diferentes cores, na compra de dois 50% de desconto o segundo.</CardText>
                        <Button class="btn btn-warning" href="/item2">R$ 19,99</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body>
                        <Image src={femin3} />
                        <br />
                        <h4>Macaquinho multiplas cores</h4>
                        <br />
                        <CardText>Macaquinho feminino Tamanho único, 12 peças variadas.</CardText>
                        <Button class="btn btn-warning">R$ 39,99</Button>
                    </Card>
                </Col>
            </div>

        </Col>
    )
}
