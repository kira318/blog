import { useLocation } from "react-router-dom"
import {useFetch} from "../../hooks/useFetch"


import BlogList from "../../components/BlogList"

import "./Search.css"

export default function Search() {

    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get("q")

    const url = "http://localhost:3000/blogs?q=" +  query
    const {error, isPending, data} = useFetch(url)

    return (
        <div>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <BlogList data={data}/>}
        </div>
    )
}