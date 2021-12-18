import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CarrosDataSource} from '../datasources';
import {Repuestos, RepuestosRelations} from '../models';

export class RepuestosRepository extends DefaultCrudRepository<
  Repuestos,
  typeof Repuestos.prototype.id,
  RepuestosRelations
> {
  constructor(
    @inject('datasources.carros') dataSource: CarrosDataSource,
  ) {
    super(Repuestos, dataSource);
  }
}
