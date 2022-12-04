

import "./input-container.style.scss"

const Input = ({ labelName, ...inputProps }) => {
    return (
        <div className="input-container">
            <label className="label-input">{labelName}</label>
            <input {...inputProps} />
        </div>
    )
}

export default Input