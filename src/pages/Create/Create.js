import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import "./Create.css"

export default function Create() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const history = useHistory()

    const { postData, data, error } = useFetch("http://localhost:3000/blogs", "POST")

    const handleSubmit = (e) => {
        e.preventDefault()
        postData({ title, content })
    }

    useEffect(() => {
        if (data) {
            history.push("/")
        }
    }, [data])

    return (
        <div className="create-blog">
            <form onSubmit={handleSubmit}>
                <span>
                    Title
                </span>
                <br />
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                />
                <br />
                <span>
                    Content
                </span>
                <br />
                <textarea
                    rows="10"
                    cols="100"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    required
                />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}