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
      <form
        className="mx-auto max-w-screen-md">
        <h1 className="mb-4 text-xl">Atualize o perfil</h1>

        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="w-full"
            id="name"
            autoFocus
          // {...register('name', {
          //   required: 'Please enter name',
          // })}
          />
          {/* {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )} */}
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="w-full"
            id="email"
          // {...register('email', {
          //   required: 'Please enter email',
          //   pattern: {
          //     value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
          //     message: 'Please enter valid email',
          //   },
          // })}
          />
          {/* {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )} */}
        </div>

        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            className="w-full"
            type="password"
            id="password"
          // {...register('password', {
          //   minLength: { value: 6, message: 'password is more than 5 chars' },
          // })}
          />
          {/* {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )} */}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="w-full"
            type="password"
            id="confirmPassword"
          // {...register('confirmPassword', {
          //   validate: (value) => value === getValues('password'),
          //   minLength: {
          //     value: 6,
          //     message: 'confirm password is more than 5 chars',
          //   },
          // })}
          />
          {/* {errors.confirmPassword && (
            <div className="text-red-500 ">
              {errors.confirmPassword.message}
            </div>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'validate' && (
              <div className="text-red-500 ">Password do not match</div>
            )} */}
        </div>
        <div className="mb-4">
          <button className="primary-button">Update Profile</button>
        </div>
      </form>

    </Col>

  )
}
