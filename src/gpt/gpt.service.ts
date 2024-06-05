import { Injectable } from '@nestjs/common';

import { orthographyCheckUseCase } from './use-cases';
import { OrthographyDto } from './dtos';

@Injectable()
export class GptService {
  async orthographyCheck(orthographyDto: OrthographyDto) {
    const { prompt } = orthographyDto;

    return await orthographyCheckUseCase({ prompt });
  }
}
