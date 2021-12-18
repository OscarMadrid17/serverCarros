import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Repuestos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
    required: true,
  })
  modelo: string;

  @property({
    type: 'string',
  })
  anio?: string;

  @property({
    type: 'string',
    required: true,
  })
  pieza: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'boolean',
    default: false,
  })
  disponible?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Repuestos>) {
    super(data);
  }
}

export interface RepuestosRelations {
  // describe navigational properties here
}

export type RepuestosWithRelations = Repuestos & RepuestosRelations;
