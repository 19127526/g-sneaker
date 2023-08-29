import {Fragment} from "react"
import trash from "@/assets/trash.png"
import plus from "@/assets/plus.png"
import minus from "@/assets/minus.png"
import {useDispatch} from "react-redux"
import {removeItemCart, updateItemCart} from "@/pages/index.action"

const UPDATE_QUANTITY : any = {
  DES: "DES",
  INS: "INS"
}

const CardCartComponent = (props : any) => {
  const {shoe} = props
  const dispatch = useDispatch()
  const handleClickQuantity = (type : any) => {
    if (UPDATE_QUANTITY.INS == type) {
      dispatch((updateItemCart({
          ...shoe,
          quantity: shoe?.quantity + 1,
        })
      ))
    } else {
      dispatch((updateItemCart({
          ...shoe,
          quantity: shoe?.quantity - 1,
        })
      ))
    }
  }

  const handleClickRemove = () => {
    dispatch((removeItemCart(shoe)))
  }
  return (
    <Fragment>
      <div className='cart-container cart-container-active' key={shoe?.id}>
        <div className='cart-left'>
          <div className='cart-left-image cart-item-image' style={{backgroundColor: shoe?.color}}>
            <div className='cart-image'>
              <img src={shoe?.image}/>
            </div>
          </div>
        </div>
        <div className='cart-right'>
          <div className='cart-name'>
            {shoe?.name}
          </div>
          <div className='cart-price'>
            ${shoe?.price}
          </div>
          <div className='cart-info'>
            <div className='cart-button-change'>
              <div className='cart-button'
                   onClick={() => handleClickQuantity(UPDATE_QUANTITY.DES)}>
                <img className="cart-count-icon" src={minus.src}/>
              </div>
              <div className='cart-quantity'>{shoe?.quantity}</div>
              <div className='cart-button'
                   onClick={() => handleClickQuantity(UPDATE_QUANTITY.INS)}>
                <img className="cart-count-icon" src={plus.src}/>
              </div>
            </div>
            <div className='cart-trash' onClick={() => handleClickRemove()}>
              <img src={trash.src}/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CardCartComponent