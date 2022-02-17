import React from 'react';
import Header from './components/header';
import Search from './components/search';
import Hot from './components/hot';
import { useHttpHook } from '@/hooks';

import './index.less';

export default function(props){

  const [citys, citysLoading] = useHttpHook({
    url: '/commons/citys'
  });
  const [houses] = useHttpHook({
    url: '/house/hot'
  });
  return (
    <div className='home'>
      {/**header登录 */}
      <Header />
      {/**搜索 */}
      <Search citys={citys} citysLoading={citysLoading} />
      {/**热门民宿 */}
      <Hot houses={houses}/>
    </div>
  )
}
