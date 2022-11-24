

import "./input-container.style.scss"

const Input = ({ labelName, ...inputProps }) => {
    return (
        <div>
            <label>{labelName}</label>
            <input {...inputProps} />
        </div>
    )
}

export default Input