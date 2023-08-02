// eslint-disable-next-line react/prop-types
function Card({className,children}) {
    const classes = 'card '+className;
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Card