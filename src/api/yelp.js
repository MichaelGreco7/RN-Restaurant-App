import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer yNeQMNZA1hb1J7jUPH1j1EKpvCVdwsCFp3BmtDwKX61Kycq3dbQ045QGUWbTRVSyciNSyZdAM0oZSv8sg1nBjiHlIIZClM0ZYYJL_Jo8OT5APm5IO5C74fzlcXaZXnYx',
  },
});
