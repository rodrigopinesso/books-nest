import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class PriceAdjuster implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.body.value) {
      req.body.value = req.body.value * 1.25;
    }
    next();
  }
}
