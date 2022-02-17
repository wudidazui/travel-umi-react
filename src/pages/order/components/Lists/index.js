import React, { useEffect } from 'react';
import { isEmpty } from 'project-libs';
import OrderItem from '../Item';
import { ShowLoading } from '@/components';
import { OrderSkeletons } from '@/skeletons';

export default function (props) {

  useEffect(() => {

  }, [])

  return (
    <div>
      {isEmpty(props?.orders) ?
        <OrderSkeletons /> :
        <div className='tab-lists'>
          {props.orders.map(item => (
            <OrderItem type={props.type} key={item.id} {...item}/>
          ))}
          <ShowLoading showLoading={props.showLoading}/>
        </div>
      }
    </div>
  )
}
