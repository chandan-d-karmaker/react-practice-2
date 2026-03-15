export default function Post({ post }) {

    console.log(post);

    const { title, body } = post;
    return (
        <div className="my-post">
            <h2>Title: {title} </h2>
            <h3>Body: {body} </h3>
        </div>
    )
}