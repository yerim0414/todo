import axios from 'axios';

const instance = axios.create({
      // 요청을 보낼 Api Server Ip
      baseURL: 'http://192.168.210.122:5000'
});

export default instance;