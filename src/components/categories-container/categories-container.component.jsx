import Category from "../category-container/category-container.component"

import "./categories-container.style.scss"

const Categories = ({ categories }) => {
    return (
        <div className="categories-container">
            {
                categories.map(({ id, title, imageUrl }) => {
                    return (
                        <Category title={title} imageUrl={imageUrl} key={id} />
                    )
                })
            }
        </div>
    )
}

export default Categories