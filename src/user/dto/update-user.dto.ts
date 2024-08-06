import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PartialType(CreateUserDto) {}
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';

export class UpdateUserDto {
  //   @ApiProperty({
  //     example: 'test',
  //   })
  //   @IsString()
  //   @IsNotEmpty()
  //   firstName: 'string';
  @Expose()
  @ApiProperty({
    example: 'testUser',
    required: true,
  })
  firstName: string;
  @Expose()
  @ApiProperty({
    example: 'testUser',
    required: true,
  })
  lastName: string;
  //   @IsString()
  //   @IsNotEmpty()
  //   lastName: 'string';
}
