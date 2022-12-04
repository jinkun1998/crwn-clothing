import "./button.style.scss"

const Button = ({ buttonType, ...otherProps }) => {
    return (
        <button className={`button-${buttonType}`} {...otherProps} />
    )
}

export default Button