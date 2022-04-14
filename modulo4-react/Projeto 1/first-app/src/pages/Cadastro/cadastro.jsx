import Input from '../../components/Input/input'
import NavLink from '../../components/NavLink/navlink'

import './cadastro.css'

function Cadastro() {

    const salvarProduto = (nome, preco, descricao, peso) => {

        return {

            nome: nome,
            preco: preco,
            descricao: descricao,
            peso: peso

        }

    }

    return (

        <div className='cadastro-container'>

            <nav className='cadastro-navbar'>
                <ul>
                    <li><h1>Logo</h1></li>
                    <li><NavLink destiny={'/'} text={'Voltar à Página Inicial'}/></li>
                </ul>
            </nav>

            <main className='cadastro-main'>
                <form className='cadastro-form' action="">
                    <div>
                        <h1>Cadastrar Produtos</h1>

                        <Input type={'text'} text={'Nome'} />

                        <Input type={'number'} text={'Preço'}/>

                        <Input type={'text'} text={'Descrição'}/>

                        <Input type={'number'} text={'Peso'}/>

                        <button onClick={salvarProduto()} type='button'>Salvar</button>

                    </div>

                </form>

            </main>

        </div>

    )

}

export default Cadastro;
