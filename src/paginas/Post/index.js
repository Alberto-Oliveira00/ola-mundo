import { useParams } from "react-router-dom"
import posts from "json/posts.json"

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    console.log(post)
    return (
        <h1>Post {parametros.id}</h1>
    )
}