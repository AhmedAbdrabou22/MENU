import React from 'react'
import Card from 'react-bootstrap/Card';
const Cards = ({ items }) => {
    return (
        <div className='cards'>
            {
                items.length ? (
                    items.map((item) => {
                        return (
                            <Card className='d-flex flex-row card' key={item.id}>
                                <Card.Img variant="top" src={item.imgUrl} className='imgele' />
                                {/* <img src={item.imgUrl} className='imgele' alt="No   "/> */}
                                <Card.Body>
                                    <Card.Title className='d-flex justify-content-between'>
                                        <div>{item.title}</div>
                                        <div>{item.price} حنيه</div>
                                    </Card.Title>
                                    <Card.Text className='mt-4'>
                                        {item.discription}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                ) : (<h1>Not Data Available</h1>)
            }
        </div>
    )
}

export default Cards
