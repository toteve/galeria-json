// importa libreria de react
import React from 'react'
// importa info del json a un arreglo de objetos
import Data from '../data.json'

// importa componentes de la libreria react-bootstrap Card y Button
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

// construccion del componente Tarjeta
const Tarjeta = () => {

    return (
        <div className="container">
            <div className="row">
                {/* recorremos el array importando usando function map */}
                {Data.map(item =>
                     /* definimos un key para recorrer el array de objetos */
                    <div key={item.id} className="col-md-4">
                    {/* Hacemos uso componente Card y referenciamos cada propiedad del objeto en array */}
                        <Card className="mb-4">
                            <div className="img-card" style={{ "backgroundImage": `url(${item.photo})`}}> </div>
                            <Card.Body>
                                <Card.Title>{item.nombre}</Card.Title>
                                <Card.Text>
                                    {item.marca} - ${item.precio}
                                </Card.Text>
                                <Button variant="secondary">Comprar</Button>
                            </Card.Body>
                        </Card>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Tarjeta
