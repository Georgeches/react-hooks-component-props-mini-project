function Article(props){
    return(
        <article>
            <h3>{props.article.title}</h3>
            <small defaultValue="January 1, 1970">{props.article.date}</small>
            <p>{props.article.preview}</p>
        </article>
    )
}

export default Article;