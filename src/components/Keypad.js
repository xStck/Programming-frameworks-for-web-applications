function KeyPad(props) {
    return (
        <div className="button">
            <button className="primary" name="(" onClick={
                e => props.onClick(e.target.name)}>(</button>
            <button className="primary" name=")" onClick={
                e => props.onClick(e.target.name)}>)</button>
            <button className="primary" name="C" onClick={
                e => props.onClick(e.target.name)}>C</button>
            <button className="primary" name="CE" onClick={
                e => props.onClick(e.target.name)}>CE</button><br />
            ...
        </div>
    )
}
export default KeyPad