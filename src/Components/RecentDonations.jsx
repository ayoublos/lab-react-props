import Donation from "./elements/Donation"
export default function RecentDonations(props) {
  console.log(props)
  const {donations}=props
  let list=donations.map(element=><Donation item={element}/>)
  
  return (
    <div className="recent-donations">
      <h3>Recent Donations</h3>
      <ul className="recent-donations__list">
        {list}
        

      </ul>

    </div>
  )
}
