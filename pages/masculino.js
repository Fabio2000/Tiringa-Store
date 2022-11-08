import styles from '../style/styles.module.css'
import React, { Component, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav,  Col, Card, Form, Input, CardText, ModalHeader, ModalBody, Container } from 'reactstrap';
import Image from 'next/image'
import cearense from '../public/imagens/cearense.png';
import person from '../public/imagens/person.svg';
import promo from '../public/imagens/promocao.png'
import inaugura from '../public/imagens/inaugura.jpeg'

import mas from '../public/imagens/masculina/mas.png'
import masc from '../public/imagens/masculina/ternoUm.jpg'
import mascOne from '../public/imagens/masculina/socialUm.jpeg'
import mascTwo from '../public/imagens/masculina/unisexUm.jpg'


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                        <Col className='col-7' style={{ textAlignLast: 'end' }}>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle style={{ backgroundColor: 'transparent', borderColor: 'transparent' }} ><Image src={person} width={50} height={50} /></DropdownToggle>
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

            <div>
                <Carousel className={styles.corousel}>
                    <div>
                        <Image src={mas} width={990} height={250} alt="imagem1" />

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
                        <Image src={mascOne} />
                        <br />
                        <h4>Camiseta masculina tiringa</h4>
                        <CardText>Compre agora a camiseta social que o tiringa usa diáriamente em sua fazenda.</CardText>
                        <Button class="btn btn-warning" href="/item" onClick={handleShow}>R$ 59,99</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body>
                        <Image src={mascTwo} />
                        <br />
                        <h4>Camiseta Unisex Tiringa Oficial</h4>
                        <CardText>Camiseta Unisex com diferentes tamanhos e diferentes cores para gostos de ambos genêros.</CardText>
                        <Button class="btn btn-warning" href="/item2">R$ 19,99</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body>
                        <Image src={masc} />
                        <br />
                        <h4>Terno completo estilo tiringa</h4>
                        <br />
                        <CardText>Compromisso importante? Escolha já nosso lindo terno tiringa.</CardText>
                        <Button class="btn btn-warning" href="/item3">R$ 39,99</Button>
                    </Card>
                </Col>
            </div>

            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        

        </Col >
    )
}
