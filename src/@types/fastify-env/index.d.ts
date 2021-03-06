import { FastifyInstance as RealFastify } from 'fastify';

import { ENV } from '../../config';

declare global {
  interface Service<Document> {
    updateAll: (documents: Document[]) => Promise<void>;
    getOne: (query?: any) => Document[];
  }
}

declare module 'fastify' {
  interface FastifyInstance extends RealFastify {
    config: ENV;
    Stations: Service<any>;
  }
}

export {};
