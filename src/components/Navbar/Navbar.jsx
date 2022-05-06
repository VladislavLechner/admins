import {Col, Row} from "react-bootstrap";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import React from "react";


class Navbar extends React.Component {

    constructor(props)
    {
        super(props);
        this.state =  {
            recivedData: []
        }
    }

    clickHandler() {
        fetch('http://172.30.0.39:8000/get-accumulators')
        .then(response => response.json())
        .then(data => {
            //this.setState({ totalReactPackages: data.total });
            this.setState({recivedData: data}); // как то его надо прокинуть в аккумуляторы чтобы от туда его парсить 
        });
      }
      render() {
          return (
        <Row className={styles.items_row}>
            
            <Col xs={12} className={styles.nav_title}>
                <span>Мониторинг аккумуляторных батарей</span>
            </Col>
            <NavLink to='/accumulators' className={styles.nav_link} activeClassName={styles.nav_link_active}>
                <Col xs={12} className={styles.nav_item}>
                    <span >Аккумуляторы</span>
                </Col>
            </NavLink>

            <NavLink to='/alarm' className={styles.nav_link} activeClassName={styles.nav_link_active}>
                <Col xs={12} className={styles.nav_item}>
                    <span>Аварийные сигналы</span>
                </Col>
            </NavLink>

            <NavLink to='/battery' className={styles.nav_link} activeClassName={styles.nav_link_active}>
                <Col xs={12} className={styles.nav_item}>
                    <span>Батареи</span>
                </Col>
            </NavLink>

            <NavLink to='/settings' className={styles.nav_link} activeClassName={styles.nav_link_active}>
                <Col xs={12} className={styles.nav_item}>
                    <span>Настройки сети</span>
                </Col>
            </NavLink>

            <NavLink to='/system' className={styles.nav_link} activeClassName={styles.nav_link_active}>
                <Col xs={12} className={styles.nav_item}>
                    <span>Система</span>
                </Col>
            </NavLink>

            <Col xs={12} className={styles.buttons_col}>
                <button className={styles.submit_btn}>
                    <span style = {{textAlign: "center", paddingBottom: 50}}> Сохранить </span>
                </button>
                <button className={styles.cancel_btn}>Отмена</button>
            </Col>
        </Row>
          )
      }
} 

export default Navbar