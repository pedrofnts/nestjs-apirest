import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  Max,
  MaxLength,
  Min,
  Validate,
  ValidateNested,
} from 'class-validator';

export class ProductFeaturesDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  description: string;
}

export class ProductImageDTO {
  @IsUrl({ message: 'URL inválida' })
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  description: string;
}
export class CreateProductDTO {
  @IsUUID(undefined, { message: 'ID de usuário inválida' })
  userId: string;

  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'O valor precisa ser maior que zero' })
  value: number;

  @IsPositive({ message: 'Quantidade mínima inválida' })
  quantity: number;

  @IsNotEmpty({ message: ' A descrição não pode ser vazia' })
  @MaxLength(1000, { message: 'A descrição pode ter até 1000 caracteres' })
  description: string;

  @ValidateNested()
  @IsArray()
  @Type(() => ProductFeaturesDTO)
  features: ProductFeaturesDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => ProductImageDTO)
  images: ProductImageDTO[];

  @IsString()
  @IsNotEmpty({ message: 'A categoria é obrigatória' })
  category: string;
}
