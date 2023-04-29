function About(props){
    return(
        <aside>
            <img src={props.blog.image} alt="blog logo" defaultValue="https://via.placeholder.com/215"/>
            <p>{props.blog.about}</p>
        </aside>
    )
    
}

export default About;