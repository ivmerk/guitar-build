import {
  Body,
  ConflictException,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { fillObject } from '../../utils/common.js';
import { UserRdo } from './rdo/user.rdo.js';
import { LocalAuthGuard } from './guards/local-auth-guard.js';
import { ApiResponse } from '@nestjs/swagger';
import { RequestWithUser } from '../../types/request-with-user.js';
import { AUTH_USER_EXISTS } from './user.constant.js';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';
import { RequestWithTokenPayload } from '../../types/request-with-token-payload.js';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.userService.register(dto);
    return fillObject(UserRdo, newUser);
  }

  @UseGuards(LocalAuthGuard)
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Password or Login is wrong.',
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Req() { user }: RequestWithUser) {
    if (user) {
      return this.userService.createUserToken(user);
    } else {
      throw new ConflictException(AUTH_USER_EXISTS);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('check')
  public async checkToken(@Req() { user: payload }: RequestWithTokenPayload) {
    return payload;
  }
}
