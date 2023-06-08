// tsrfc
import React from 'react'
import { DispatchType, RootState } from '../../../Redux/configStore';
import { useDispatch, useSelector } from 'react-redux';

type Props = {}

export default function Category({}: Props) {

    // Get State
    const { arrProduct, arrPaging } = useSelector((state: RootState) => state.productReducer);
    const dispatch: DispatchType = useDispatch();


  return (
    <div>
      dfdfsfsfs
    </div>
  )
}