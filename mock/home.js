export default {
  'post /api/commons/citys': (req, res) => {
    res.json({
      status: 200,
      data: [[{ label: '杭州', value: '10001' }, { label: '苏州', value: '10002' }]]
    });
  },
  'post /api/house/hot': (req, res) => {
    res.json({
      status: 200,
      data: [
        {
          id: 1,
          img: 'http://p2.music.126.net/W91GN46yvvb5jBGoC8IDYA==/109951166614644112.jpg?param=140y140',
          title: '东城民宿',
          info: '东城区交通方便',
          price: '100'
        },
        {
          id: 2,
          img: 'http://p2.music.126.net/W91GN46yvvb5jBGoC8IDYA==/109951166614644112.jpg?param=140y140',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: '120'
        },
        {
          id: 3,
          img: 'http://p2.music.126.net/W91GN46yvvb5jBGoC8IDYA==/109951166614644112.jpg?param=140y140',
          title: '新区民宿',
          info: '新区民宿位置优越',
          price: '200'
        },
        {
          id: 4,
          img: 'http://p2.music.126.net/W91GN46yvvb5jBGoC8IDYA==/109951166614644112.jpg?param=140y140',
          title: '老城民宿',
          info: '老城区风景秀美',
          price: '220'
        }
      ]
    });
  }
};
