import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

import {
  orthographyCheckUseCase,
  prosConsDiscusserStreamUseCase,
  prosConsDiscusserUseCase,
  translateUseCase,
} from './use-cases';
import { OrthographyDto, ProsConsDiscusserDto, TranslateDto } from './dtos';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async orthographyCheck(orthographyDto: OrthographyDto) {
    const { prompt } = orthographyDto;

    return await orthographyCheckUseCase(this.openai, { prompt });
  }

  async prosConsDiscusser(prosConsDiscusserDto: ProsConsDiscusserDto) {
    const { prompt } = prosConsDiscusserDto;

    return await prosConsDiscusserUseCase(this.openai, { prompt });
  }

  async prosConsDiscusserStream(prosConsDiscusserDto: ProsConsDiscusserDto) {
    const { prompt } = prosConsDiscusserDto;

    return await prosConsDiscusserStreamUseCase(this.openai, { prompt });
  }

  async translateText(text: TranslateDto) {
    const { prompt, lang } = text;

    return await translateUseCase(this.openai, { prompt, lang });
  }
}
