// sdsadsdsdsadsaad
import { useEffect } from 'react'
import Product from '../../Components/Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../Redux/configStore'
import { ProductModel, getDataProductApi } from '../../Redux/reducers/productReducer'

type Props = {}

export default function Home({ }: Props) {

  const { arrProduct } = useSelector((state: RootState) => state.productReducer);
  const dispatch: DispatchType = useDispatch();

  // Gọi api
  const getDataProductList = async () => {

    const actionApi = getDataProductApi();
    dispatch(actionApi);
  }

  useEffect(()=> {
    getDataProductList ();
  }, [])


  const renderProducts = (): JSX.Element[] => {

    return arrProduct.map((item:ProductModel,index) => {
     return <div className="col-4 mt-2" key={item.id}>
        <Product product={item}/>
      </div>
    })
  }

  return (
    <div className='container'>
      <h3>Shop Shoes</h3>
      <div className="row">
        {renderProducts()}
      </div>
    </div>
  )
}