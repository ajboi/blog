const Heading = ({heading}) => {
    return (
    <div className='heading-wrapper'>
        <h2>
            <span className='heading-underline'>
                {heading}
            </span>
        </h2>
    </div>
    )
}

export default Heading