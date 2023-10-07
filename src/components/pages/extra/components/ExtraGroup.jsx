const ExtraGroup = ({ href, id, url, caption, description, bolded }) => {
    return (
        <a href={href}>
            <div className="extra-group" id={id}>
                <figure className="extra-figure">
                    <img src={url} />
                    <figcaption>{caption}</figcaption>
                </figure>
                <p><span>{bolded}</span> {description}</p>
            </div>
        </a>
    )
}

export default ExtraGroup;