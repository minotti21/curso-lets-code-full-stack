import { useState } from "react"


export default function InputImage() {

    const [srcImage, setSrcImage] = useState("")

    console.log(srcImage)


    return (

        <div>

            <input type="file" value={srcImage} onChange={(e) => {

                setSrcImage(e.target.value)

            }}/>

            <img src={srcImage} alt="" />

        </div>

    )

}
