import DetailHead from '../Components/ViewDetail/DetailHead'
import CarInfo from '../Components/ViewDetail/CarInfo'
import CarTable from '../Components/Table/CarTable'

export default function ViewDetail() {
  return (
    <div className="detail_container">
      <DetailHead />
      <div className="detail_Info">
        <div className="info">
          <CarInfo />
        </div>
        <div className="Car_table">
          <CarTable />
        </div>
      </div>
    </div>
  )
}
