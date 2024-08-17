// src/elasticsearch.client.ts
import { Client } from '@elastic/elasticsearch';

export const elasticsearchClient = new Client({
    node: 'http://localhost:9200'
});