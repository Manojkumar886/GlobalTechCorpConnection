import {Button, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import BadgeSharpIcon from '@mui/icons-material/BadgeSharp';

export const Homepage=()=>
{
    return(
        <>
            <Navbar bg='success'  expand='lg'>
                <NavbarBrand><b>ZEALOUS<BadgeSharpIcon></BadgeSharpIcon>TECHNOLOGIES</b></NavbarBrand>
                <NavbarToggle aria-controls='#mynavbar'></NavbarToggle>
                <NavbarCollapse id='mynavbar'>
                    <Nav>
                        <Nav.Link ><i class="bi bi-1-circle-fill"></i></Nav.Link>
                        <Nav.Link ><i class="bi bi-2-circle-fill"></i></Nav.Link>
                        <Nav.Link ><i class="bi bi-3-circle-fill"></i></Nav.Link>
                        <button  className="btn btn-dark ms-5 col-6">PLUG OUT</button>
                        <button  className="btn btn-danger ms-1 col-6">ABANDON</button>
                    </Nav>
                </NavbarCollapse>
            </Navbar>

        </>
    );  
}