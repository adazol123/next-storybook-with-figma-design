
export const InputText = (props) => {
    const { size = 'medium', ...rest} = props
    return (
        <input type="text" className={`input ${size}`} {...rest} />
    )
}
