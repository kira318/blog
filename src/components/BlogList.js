import { Link } from "react-router-dom";
import "./BlogList.css"

export default function BlogList({data}){



    return (
        <div className="blogList">
            {data.map((d)=>(
                <div key={d.id} className="blog">
                    <h1>{d.title}</h1>
                    <p>{d.content.substring(0, 100)}</p>
                    <Link to={`/blogs/${d.id}`}>Show More</Link>
                </div>
            ))}
        </div>
    )
}