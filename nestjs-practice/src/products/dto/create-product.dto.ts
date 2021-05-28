// Data Transfer Object (DTO) is an obj the defines how the data will be sent over the network.
// DTO is defined using Classes

export class CreateProductDTO {
  readonly id: string;
  readonly name: string;
  readonly qty: number;
  readonly price: number;
}