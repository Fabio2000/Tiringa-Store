import styles from '../style/styles.module.css'
import React, { Component, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, Form, DropdownMenu, DropdownItem, Nav, Col, Card, Row, Input, CardText, ModalHeader, ModalBody, Container } from 'reactstrap';
import Image from 'next/image'
import cearense from '../public/imagens/cearense.png';
import person from '../public/imagens/person.png';
import promo from '../public/imagens/promocao.png'
import inaugura from '../public/imagens/inaugura.jpeg'
import mas from '../public/imagens/masculina/mas.png'
import masc from '../public/imagens/masculina/ternoUm.jpg'
import mascOne from '../public/imagens/masculina/socialUm.jpeg'


// Fotos
import femOne from '../public/imagens/feminina/amarelo.png'
import femTwo from '../public/imagens/feminina/laranja.png'
import femTree from '../public/imagens/feminina/preto.png'

import shortsUm from '../public/imagens/feminina/escuro.png'
import shortsTwo from '../public/imagens/feminina/pretoj.png'
import shortsTree from '../public/imagens/feminina/jeans.png'

import jeansOne from '../public/imagens/feminina/unisexUm.jpg'
import jeansTwo from '../public/imagens/feminina/unisexDois.png'
import jeansTree from '../public/imagens/feminina/unisexTres.png'





import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import fem from '../public/imagens/feminina/fem.png'

import femin1 from '../public/imagens/femininoTiringa.png'
import femin2 from '../public/imagens/fTiringa.png'
import femin3 from '../public/imagens/fTiringa1.PNG'


export default function () {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const [umShow, setumShow] = useState(false);
    const [doisShow, setdoisShow] = useState(false);
    const [tresShow, settresShow] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Col className={styles.teste}>
            <Nav className="navbar navbar-expand navbar-dark bg-dark col-12">
                <div id="informa" className={styles.informa}>
                    <div>
                        <a className="navbar-brand" href="/"><Image src={cearense} width={60} height={60} /></a>
                    </div>
                    <Col className="collapse navbar-collapse">
                        <Container className='col-12'>
                            <Col className="">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">Pagina inicial</a>
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
                            <DropdownItem href='/login'>Login</DropdownItem>
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
                        src={fem}
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
                        <Image src={femin1} height={650} />
                        <br />
                        <h4>Promoção Feminina</h4>
                        <CardText>Conjunto lançamento tiringa Store só para mulheres, body e calça.</CardText>
                        <Button class="btn btn-warning" onClick={() => setumShow(true)}>R$ 59,99</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body>
                        <Image src={femin2} height={650} />
                        <br />
                        <h4>Body´s Feminino multiplas cores</h4>
                        <CardText>Body femino com diferentes tamanhos e diferentes cores, na compra de dois 50% de desconto o segundo.</CardText>
                        <Button class="btn btn-warning" onClick={() => setdoisShow(true)}>R$ 39,90</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body>
                        <Image src={femin3} height={799} />
                        <br />
                        <h4>Macaquinho multiplas cores</h4>
                        <br />
                        <CardText>Macaquinho feminino Tamanho único, 12 peças variadas.</CardText>
                        <Button class="btn btn-warning" onClick={() => settresShow(true)}>R$ 359,90</Button>
                    </Card>
                </Col>
            </div>

            <Modal
                size="lg"
                show={umShow}
                onHide={() => setumShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm" style={{ marginLeft: 'auto' }}>
                        Camiseta masculina tiringa
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <Carousel fade className={styles.modalCel}>
                                        <Carousel.Item style={{ textAlign: `-webkit-center` }} interval={2000}>
                                            <Image className="d-block w-100"
                                                width={420}
                                                height={280}
                                                src={femOne}
                                                alt="First slide" />
                                            <Carousel.Caption>
                                                <h3>Teste</h3>
                                                <p>Teste.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item >
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={femTwo}
                                                alt="First slide" />
                                            <Carousel.Caption>
                                                <h3>Teste</h3>
                                                <p>Teste.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={femTree}
                                                alt="First slide"
                                                width={420}
                                                height={280}
                                            />
                                            <Carousel.Caption>
                                                <h3>Teste</h3>
                                                <p>Teste.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Col sm="12" style={{ textAlign: '-webkit-center' }}>
                                        <Col body>
                                            <Button class="btn btn-warning" href='/carinho'>R$ 359,90</Button>
                                        </Col>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={doisShow}
                onHide={() => setdoisShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" style={{ marginLeft: 'auto' }}>
                        Camiseta Unisex Tiringa Oficial
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <Carousel fade className={styles.modalCel}>
                                        <Carousel.Item style={{ textAlign: `-webkit-center` }} interval={2000}>
                                            <Image className="d-block w-100"
                                                width={420}
                                                height={280}
                                                src={shortsUm}
                                                alt="First slide" />
                                            <Carousel.Caption>
                                                <h3>Teste</h3>
                                                <p>Teste.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item >
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={shortsTwo}
                                                alt="First slide" />
                                            <Carousel.Caption>
                                                <h3>Teste</h3>
                                                <p>Teste.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={shortsTree}
                                                alt="First slide"
                                                width={420}
                                                height={280}
                                            />
                                            <Carousel.Caption>
                                                <h3>Teste</h3>
                                                <p>Teste.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Col sm="12" style={{ textAlign: '-webkit-center' }}>
                                        <Col body>
                                            <Button class="btn btn-warning" href='/carinho'>R$ 359,90</Button>
                                        </Col>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={tresShow}
                onHide={() => settresShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" style={{ marginLeft: 'auto' }}>
                        Terno completo estilo tiringa
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <Carousel fade className={styles.modalCel}>
                                        <Carousel.Item style={{ textAlign: `-webkit-center` }} interval={2000}>
                                            <Image className="d-block w-100"
                                                width={420}
                                                height={280}
                                                src={jeansOne}
                                                alt="First slide" />
                                            <Carousel.Caption>
                                                <h3>Teste</h3>
                                                <p>Teste.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item >
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={jeansTwo}
                                                alt="First slide" />
                                            <Carousel.Caption>
                                                <h3>Teste</h3>
                                                <p>Teste.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={jeansTree}
                                                alt="First slide"
                                                width={420}
                                                height={280}
                                            />
                                            <Carousel.Caption>
                                                <h3>Teste</h3>
                                                <p>Teste.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Col sm="12" style={{ textAlign: '-webkit-center' }}>
                                        <Col body>
                                            <Button class="btn btn-warning" href='/carinho'>R$ 359,90</Button>
                                        </Col>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>

        </Col>
    )
}
