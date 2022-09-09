import { useFetch } from "../../hooks/useFetch"
import { useParams } from "react-router-dom"
import "./Blog.css"

export default function Blog(){

    const {id} = useParams()
    const url = "http://localhost:3000/blogs/" + id
    const {data, isPending, error} = useFetch(url)
    
    return (
        <div className="blog">
            {isPending && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            {data && 
                <>
                    <h2 className="title">{data.title}</h2>
                    <div className="display-linebreak">{data.content}</div>
                </> 
            }
        </div>
    )
}