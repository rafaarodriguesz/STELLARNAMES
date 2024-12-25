import React, { useState } from 'react'
import "./Form.css"

import { useNavigate } from 'react-router-dom';

//AXIOS
import axios from "axios";

const Form = () => {

    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate()


    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Formulário Enviado!");

        try{
            const response = await axios.post("http://localhost:5000/api/users/create",{
                name,
                msg
            })

            console.log("Usuário criado", response.data);
            navigate("/confirmation")


        } catch(error){
            console.error("Erro ao enviar dados", error);
        }


    }

    return (
        <div className='formBox'>
            <form className="formContainer" onSubmit={handleSubmit}>
                <h1>Qual o seu nome?</h1>
                <br />
                <input className="inputStyle" type="text" placeholder="coloque seu nome aqui" value={name} onChange={(e) => setName(e.target.value)}/>
                <input className="inputStyle" type="text" placeholder="coloque seu mensagem pro universo" value={msg} onChange={(e) => setMsg(e.target.value)}/>
                <br />
                <button className="btn" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form