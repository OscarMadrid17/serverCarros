import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CarrosDataSource} from '../datasources';
import {Carro, CarroRelations} from '../models';

export class CarroRepository extends DefaultCrudRepository<
  Carro,
  typeof Carro.prototype.id,
  CarroRelations
> {
  constructor(
    @inject('datasources.carros') dataSource: CarrosDataSource,
  ) {
    super(Carro, dataSource);
  }
}
