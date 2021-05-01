import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  department: string;
  @IsString()
  price: string;
  @IsString()
  material: string;
  @IsString()
  dimension: string;
  @IsNumber()
  weight: number;
}
