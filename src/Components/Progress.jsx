
export default function Progress(props) {
  const {donations,targetAmount}=props
  let sum=donations.reduce((acc,cur)=>acc+cur.amount,0)
  let id=donations.length+1
  
  return (
    <div className="progress-container">
      <h3>
        Raised <span>${sum}</span> of <span>${targetAmount} </span>
      </h3>
     
    </div>

  )
}
