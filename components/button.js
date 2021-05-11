const Button = ({link, text}) => {
    return (
        <button className='button'>
            <a className='button-text text-center align-center' href={link}>{text}</a>
        </button>
    )
}

export default Button