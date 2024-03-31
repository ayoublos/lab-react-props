function Donation(props){
    const {item}=props
    return (
        <div className="donation-container">
            <h5>
            {`${item.name} donated $${item.amount}`}
        </h5>
        <p>{item.caption}</p>
        </div>
    )

}
export default Donation