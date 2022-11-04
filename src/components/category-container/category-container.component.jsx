import "./category-container.style.scss"

const Category = ({ title, imageUrl }) => {
    return (
        <div className="category-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}>

            </div>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Show Now</p>
            </div>
        </div>
    );
}

export default Category


