import { useFetch } from "../../hooks/useFetch"

import BlogList from "../../components/BlogList"

export default function Home() {

    const {data, isPending, error} = useFetch("http://localhost:3000/blogs")

    return (
        <div className="home">
            {error && <p>{error}</p>}
            {isPending && <p>loading...</p>}
            {data && <BlogList data={data}/>}
        </div>
    )
}