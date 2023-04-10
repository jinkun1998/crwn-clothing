

import "./input-container.style.scss"

const Input = ({ labelName, ...inputProps }) => {
    return (
        <div className="input-container">
            <label className="label">{labelName}</label>
            <input className="input" {...inputProps} />
        </div>
    )
}

export default Input