import { IsEmail, IsStrongPassword, Min } from 'class-validator';

export class UserDto {
  @Min(8)
  @IsEmail({
    require_tld: false,
    allow_display_name: true,
    allow_ip_domain: false,
    allow_utf8_local_part: false,
  })
  email: string;
  @Min(5)
  code: string;
  @Min(5)
  name: string;
  @IsStrongPassword({
    minUppercase: 1,
    minSymbols: 1,
  })
  password: string;
}
