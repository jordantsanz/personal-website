import './pageTitle.scss';

const PageTitle = ({ id, title, caption }) => {
    return (
        <div id={`${id}-page-title`} className='page-title-container'>
            <h1 className='page-title'>{title}</h1>
            <p>{caption ? caption : ''}</p>
        </div>

    )
}

export default PageTitle;