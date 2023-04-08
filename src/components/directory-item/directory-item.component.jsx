import "./category-container.style.scss"

const DirectoryItem = ({ title, imageUrl }) => {
    return (
        <div className="dicrectory-item-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}>

            </div>
            <div className="directory-item-body-container">
                <h2>{title}</h2>
                <p>Show Now</p>
            </div>
        </div>
    );
}

export default DirectoryItem