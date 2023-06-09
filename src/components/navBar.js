import React , {useRef , useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({filterSearch}) => {

    const [dataName , setDataName] = useState("")
    // const ele = useRef()

    const searchForProduct = ()=>{
        // filterSearch(ele.current.value)
        filterSearch(dataName)
    }
    return (
        <div>
            <Navbar bg="dark" expand="lg" className='st'>
                <Container>
                    <Navbar.Brand href="#">
                        <div className='text-light'>مطعم جديد</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='bg-light' />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="ابحث عما تريده"
                                className="me-2"
                                aria-label="Search"
                                //here we can use setState for valu input or ref
                                onChange={(e)=>setDataName(e.target.value)}
                                // ref = {ele}
                                value={dataName}
                            />
                            <Button onClick={()=>searchForProduct()} className='text-dark bg-light mx-2'>ابحث </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
