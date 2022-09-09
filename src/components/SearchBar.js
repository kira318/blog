import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./SearchBar.css"

export default function SearchBar(){

    const [term, setTerm] = useState("")
    const [change, setChange] = useState(false)
    const history = useHistory()

    useEffect(()=>{
        if(term === "" && change){
            history.push("/")
            setChange(false)
        }else if(term !== ""){
            history.push(`/search?q=${term}`)
            setChange(true)
        }
    },[term])

    return (
        <div className="searchBar">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e)=>setTerm(e.target.value)}
                    value={term}
                    required
                />
        </div>
    )
}