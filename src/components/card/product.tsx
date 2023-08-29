import checkLogo from "../../assets/check.png"
import {useDispatch} from "react-redux"
import {updateItemCart} from "@/pages/index.action"

const CardProductComponent = (props : any) => {
  const {shoe, isChoose} = props
  const dispatch = useDispatch()
  const handleClickAddItem = () => {
    dispatch(updateItemCart(shoe))
  }
  return (
    <div className='product-container' key={shoe?.id}>
      <div className='product-image' style={{backgroundColor: shoe?.color}}>
        <img src={shoe?.image}/>
      </div>
      <div className='product-name'>{shoe?.name}</div>
      <div className='product-description'>{shoe?.description}</div>
      <div className='product-info'>
        <div className='product-price'>${shoe?.price}</div>
        <div className='product-button'>
          {isChoose == undefined ?
            <p onClick={() => handleClickAddItem()}>ADD TO CART</p>
            :
            <div className="product-check-image">
              <img className="product-check-icon" src={checkLogo.src}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default CardProductComponent