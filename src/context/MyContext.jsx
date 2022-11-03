import {useState} from "react"
import { createContext  } from "react";

export const myContext  =createContext();

const MyContextProvider = (props)=>{
    const [user , setUser ]  = useState(null)
    const  value = {user , setUser} ;
    return (
        <myContext.Provider value={ value} >
            { props.children }
        </myContext.Provider>
    )
}
export default  MyContextProvider;