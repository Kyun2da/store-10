import config from '../config';

import ElasticSearch from 'elasticsearch';

var ElasticClient = new ElasticSearch.Client({
  host: config.ELASTIC_HOST,
  // log: 'trace', 쿼리 실행 로그 보여주는옵션
});

export default ElasticClient;
