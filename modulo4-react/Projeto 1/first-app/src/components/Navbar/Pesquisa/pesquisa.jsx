import { useState } from "react"



function Pesquisa() {

    const [produto, setProduto] = useState("")

    console.log(produto)

    return (

        <div className="pesquisa-input">

            <input
                placeholder='Buscar produtos de seu interesse...'
                type="text"
                value={produto}
                onChange={(produto) => setProduto(produto.target.value)}
            />

           <i className="pesquisa-icon"></i>


        </div>

    )




}

export default Pesquisa
