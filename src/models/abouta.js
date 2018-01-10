

export default {

  namespace: 'abouta',

  state: {
    describe: [
      '无锡欣动信息科技是一家专门提供行业物联网智能解决方案的研发型企业。我们秉持万物互联的理念，为工业企业、高等院校、公共机关、大型公共建筑等用户提供全面、智能的信息化管理服务。我们拥有一批优秀、年轻的富有朝气的研发团队，具有丰富的研发经验。'
    ],
    contact: '0510-85171298'
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if ( pathname === '/about' ) {
          dispatch({ type: 'getAbout' });
        }
      });
    }
  },

  effects: {
    * setAbout( _, { put, call }) {
      
    }
  },

  reducers: {
    update( state, action ) {
      return { ...state, ...action.payload };
    }
  }
};
