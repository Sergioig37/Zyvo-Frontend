import React, { useState } from 'react';
import { Offcanvas, Button, Nav } from 'react-bootstrap';

function MenuLateral(){

    const [show, setShow] = useState(false);

    return(
        <>

            <Button variant = "primary" onClick = {() => setShow(true)}>

                ☰ Abrir Menú

            </Button>
        
            <Offcanvas show ={show} onHide = {() => setShow(false)} backdrop = "static">

                <Offcanvas.Header closeButton>

                    <Offcanvas.Title>Menú</Offcanvas.Title>

                </Offcanvas.Header>

                <Offcanvas.Body>

                    <Nav className="flex-column">

                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#">Servicios</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>

                    </Nav>

                </Offcanvas.Body>

            </Offcanvas>
        

        </>

    );

}

export default MenuLateral;