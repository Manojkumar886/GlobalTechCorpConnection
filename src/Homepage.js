import {Button, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import BadgeSharpIcon from '@mui/icons-material/BadgeSharp';
import { logout } from './Connect';

export const Homepage=()=>
{
    return(
        <>
            <Navbar bg='success'  expand='lg'>
                <NavbarBrand><b>ZEALOUS<BadgeSharpIcon></BadgeSharpIcon>TECHNOLOGIES</b></NavbarBrand>
                <NavbarToggle aria-controls='#mynavbar'></NavbarToggle>
                <NavbarCollapse id='mynavbar'>
                    <Nav>
                        <Nav.Link href='/view' ><i class="bi bi-1-circle-fill"></i>Vision</Nav.Link>
                        <Nav.Link href='/update'><i class="bi bi-2-circle-fill"></i>Update Identity</Nav.Link>
                        <Nav.Link ><i class="bi bi-3-circle-fill"></i></Nav.Link>
                        <button  className="btn btn-dark ms-5 col-6" onClick={async()=>
                        {
                            const d=await logout();
                            alert(d.data);

                        }}>PLUG OUT</button>
                        <button  className="btn btn-danger ms-1 col-6">ABANDON</button>
                    </Nav>
                </NavbarCollapse>
            </Navbar>

        </>
    );  
}