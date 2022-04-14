import { useState } from 'react'
import './input.css'

export default function Input(props) {

    const [data, setData] = useState("")

    console.log(data)

    return (

        <div className="input-component">

            <label className="label" htmlFor="">{props.text}</label>
            <input className="input" type={props.type} value={data} onChange={(e) => {
                setData(e.target.value)
            }}/>

        </div>

    )

}
