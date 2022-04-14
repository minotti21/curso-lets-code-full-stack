import './navbar.css'
import NavLink from '../NavLink/navlink'
import Pesquisa from './Pesquisa/pesquisa'


function Navbar() {

    return (

        <nav className='navbar'>

            <ul className='navbar-list'>
                <li><h1>Logo</h1></li>
                <li><Pesquisa /></li>
                <li><NavLink destiny={'/cadastro'} text={'Cadastrar Produto'}/></li>
            </ul>
        </nav>

    )

}

export default Navbar
