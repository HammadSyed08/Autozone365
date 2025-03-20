import Slider from '../Slider/Slider'
import DetailCard from '../Info Card/DetailCard'

export default function CarInfo() {
  return (
    <div className='CarInfo'>
      <h5>Car Info</h5>
      <Slider />
      <div className="car_detailed">
        <DetailCard />
      </div>
      <div className="car_description">
        <h4>Description</h4>
        <p>
          Royal Royce M4 is a 4 seater Coupe with the last recorded price of 1.36. Lorem ipsum dolor sit amet. Sed corporis nostrum vel voluptatem quis eos Quis consequuntur. Aut distinctio sunt vel velit aliquam et quas quia et voluptates ipsa id vero molestiae non dolor itaque est soluta veniam. Et Quis quia et atque eius ex praesentium earum cum mollitia ducimus.
        </p>
      </div>
    </div>
  )
}
