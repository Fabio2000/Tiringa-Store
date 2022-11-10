import styles from '../style/styles.module.css'
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, Row, Col, Card, Form, Input, CardText, CardTitle, Container } from 'reactstrap';
import Image from 'next/image'
import cearense from '../public/imagens/cearense.png';
import person from '../public/imagens/person.png';
import promo from '../public/imagens/promocao.png'
import descontos from '../public/imagens/descontos.jpeg'
import inaugura from '../public/imagens/inaugura.jpeg'
import feminino from '../public/imagens/feminino.jpeg'
import masculino from '../public/imagens/masculino.jpeg'
import roupa from '../public/imagens/homemTiringa.jpg'
import roupaDois from '../public/imagens/homemTiringa2.jpeg'
import terno from '../public/imagens/terno.jpg'
import femin1 from '../public/imagens/femininoTiringa.png'
import mascOne from '../public/imagens/masculina/socialUm.jpeg'
import masc from '../public/imagens/masculina/ternoUm.jpg'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// Fotos
import camisaOne from '../public/imagens/masculina/camisaOne.png'
import camisaTwo from '../public/imagens/masculina/camisaTwo.jpg'
import camisaTree from '../public/imagens/masculina/camisaTree.png'

import socialUm from '../public/imagens/masculina/socialUm.jpeg'
import socialTwo from '../public/imagens/masculina/socialTwo.png'
import socialTree from '../public/imagens/masculina/socialTree.png'

import ternoOne from '../public/imagens/masculina/ternoOne.png'
import ternoTwo from '../public/imagens/masculina/ternoTwo.PNG'
import ternoTree from '../public/imagens/masculina/ternoTree.png'

import dolar from '../public/imagens/icones/dollar.svg'

import femin2 from '../public/imagens/fTiringa.png'
import femin3 from '../public/imagens/fTiringa1.PNG'

import { faTextWidth } from '@fortawesome/free-solid-svg-icons';
import { disconnect, version } from 'mongoose';



export default function () {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [oneShow, setoneShow] = useState(false);
    const [twoShow, settwoShow] = useState(false);
    const [treeShow, settreeShow] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Col className={styles.teste}>
            <Nav className="navbar navbar-expand navbar-dark bg-dark col-12" style={{ marginBottom: '50px' }}>
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
                        src={descontos}
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
                        <Image src={mascOne} />
                        <br />
                        <h4>Camiseta masculina tiringa</h4>
                        <CardText>Compre agora a camiseta social que o tiringa usa diáriamente em sua fazenda.</CardText>
                        <Button class="btn btn-warning" onClick={() => setoneShow(true)}>R$ 59,99</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body>
                        <Image src={camisaTwo} />
                        <br />
                        <h4>Camiseta Unisex Tiringa Oficial</h4>
                        <CardText>Camiseta Unisex com diferentes tamanhos e diferentes cores para gostos de ambos genêros.</CardText>
                        <Button class="btn btn-warning" onClick={() => settwoShow(true)}>R$ 39,90</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body>
                        <Image src={masc} />
                        <br />
                        <h4>Terno completo estilo tiringa</h4>
                        <br />
                        <CardText>Compromisso importante? Escolha já nosso lindo terno tiringa.</CardText>
                        <Button class="btn btn-warning" onClick={() => settreeShow(true)}>R$ 359,90</Button>
                    </Card>
                </Col>
            </div>

            <div class="row" style={{ justifyContent: 'center', paddingTop: '1px', paddingBottom: '20px' }} className={styles.cards}>

                <Col sm="3">
                    <Card body>
                        <Image src={femin1} width={500} height={490} />
                        <br />
                        <h4>Promoção Feminina</h4>
                        <CardText>Conjunto lançamento tiringa Store só para mulheres, body e calça.</CardText>
                        <br />
                        <Button class="btn btn-success" href="/masculino">Visite já</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body>
                        <Image src={femin2} width={500} height={430} />
                        <br />
                        <h4>Body´s Feminino multiplas cores</h4>
                        <CardText>Body femino com diferentes tamanhos e diferentes cores, na compra de dois 50% de desconto o segundo.</CardText>
                        <Button class="btn btn-success" href="/masculino">Visite já</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body>
                        <Image src={femin3} width={500} height={490} />
                        <br />
                        <h4>Macaquinho multiplas cores</h4>
                        <br />
                        <CardText>Macaquinho feminino Tamanho único, 12 peças variadas.</CardText>
                        <Button class="btn btn-success" href="/masculino">Visite já</Button>
                    </Card>
                </Col>
            </div>

            <Modal
                size="lg"
                show={oneShow}
                onHide={() => setoneShow(false)}
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
                                                height={350}
                                                src={socialUm}
                                                alt="First slide" />
                                            <h5>Compre agora a camiseta social que o <br /> tiringa usa diáriamente em sua fazenda.</h5>
                                        </Carousel.Item >
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={socialTwo}
                                                alt="First slide"
                                                width={420}
                                                height={350}
                                            />
                                            <h5>Compre agora a camiseta social que o <br /> tiringa usa diáriamente em sua fazenda.</h5>                                        </Carousel.Item>
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={socialTree}
                                                alt="First slide"
                                                width={420}
                                                height={350}
                                            />
                                            <h5>Compre agora a camiseta social que o <br /> tiringa usa diáriamente em sua fazenda.</h5>                                        </Carousel.Item>
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
                show={twoShow}
                onHide={() => settwoShow(false)}
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
                                                height={350}
                                                src={camisaOne}
                                                alt="First slide" />
                                            <h5>Camiseta Unisex com diferentes tamanhos e <br /> diferentes cores para gostos de ambos genêros.</h5>
                                        </Carousel.Item >
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={camisaTwo}
                                                alt="First slide"
                                                width={420}
                                                height={350}
                                            />
                                            <h5>Camiseta Unisex com diferentes tamanhos e <br /> diferentes cores para gostos de ambos genêros.</h5>                                        </Carousel.Item>
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={camisaTree}
                                                alt="First slide"
                                                width={420}
                                                height={350}
                                            />
                                            <h5>Camiseta Unisex com diferentes tamanhos e <br /> diferentes cores para gostos de ambos genêros.</h5>                                        </Carousel.Item>
                                    </Carousel>
                                    <Col sm="12" style={{ textAlign: '-webkit-center' }}>
                                        <Col body>
                                            <Button class="btn btn-warning" href='/carinho'>R$39,90</Button>
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
                show={treeShow}
                onHide={() => settreeShow(false)}
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
                                                height={350}
                                                src={masc}
                                                alt="First slide" />
                                            <h5>Compromisso importante? Escolha já <br /> nosso lindo terno tiringa.</h5>
                                        </Carousel.Item >
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={ternoTwo}
                                                alt="First slide"
                                                width={420}
                                                height={350}
                                            />
                                            <h5>Compromisso importante? Escolha já <br /> nosso lindo terno tiringa.</h5>
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={ternoTree}
                                                alt="First slide"
                                                width={420}
                                                height={350}
                                            />
                                            <h5>Compromisso importante? Escolha já <br /> nosso lindo terno tiringa.</h5>
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
