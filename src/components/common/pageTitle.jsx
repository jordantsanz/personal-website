import './pageTitle.scss';

const PageTitle = ({ title, caption }) => {
    return (
        <div className='page-title-container'>
            <h1 className='page-title'>{title}</h1>
            <p>{caption ? caption : ''}</p>
        </div>

    )
}

export default PageTitle;