import { createContext, useEffect, useState } from 'react';
import api from '../services';

const GlobalContext = createContext();

export const GlobalProvider = (props) => {

    const [text, setText] = useState("Node")
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
       makeRequest()
    },[page])

    const makeRequest = async () => {
        try{
            setLoading(true)
            const res = await api.get(`/search/repositories?q=${text}&page=${page}`)
            setResponse(res.data)
        }
        catch(error){
            alert("A API do GitHub tem um limite de requisições, aguarde um momento para buscar novamente")
            setResponse([])
        }
        finally{
            setLoading(false)
        }
    }

    const textModifier = (text) => {
        const textWithoutSpaces = text.replaceAll(" ","%20");
        setText(textWithoutSpaces)
    }

    return (
        <GlobalContext.Provider value={{
            response,
            text,
            loading,
            textModifier,
            makeRequest,
            page,
            setPage,
        }}>
            {props.children}
        </GlobalContext.Provider>

    )
}

export default GlobalContext;