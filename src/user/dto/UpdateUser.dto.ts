import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailIsUnique } from '../validation/email-is-unique.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @EmailIsUnique({
    message: 'Já existe um usuário com esse e-mail',
  })
  @IsOptional()
  email: string;

  @MinLength(8, { message: 'A senha precisa ter no mínimo 8 caracteres' })
  @IsOptional()
  password: string;
}
