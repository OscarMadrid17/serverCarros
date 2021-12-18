import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'carros',
  connector: 'mongodb',
  url: 'mongodb+srv://oscar:admin@cluster0.wczc8.mongodb.net/carros?retryWrites=true&w=majority',
  host: 'cluster0.wczc8.mongodb.net',
  port: 27017,
  user: 'oscar',
  password: 'admin',
  database: 'carros',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CarrosDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'carros';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.carros', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
