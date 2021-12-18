import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Carro extends Entity {
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
  modelo: string;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
  })
  color?: string;

  @property({
    type: 'string',
  })
  anio?: string;

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

  constructor(data?: Partial<Carro>) {
    super(data);
  }
}

export interface CarroRelations {
  // describe navigational properties here
}

export type CarroWithRelations = Carro & CarroRelations;
