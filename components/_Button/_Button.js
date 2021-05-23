export function _Button(props) {
    const { variant, children, ...rest} = props
    return (
        <div
            className={`button ${variant}`}
            { ...rest}
        >
        { children }
        </div>
    )
}