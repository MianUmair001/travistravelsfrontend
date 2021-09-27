import * as sgMail from '@sendgrid/mail'
import { ConfigService } from '../../config/config.service';

export class SecurityCodeUtils {
  constructor(
    private readonly config: ConfigService
  ) {
  }

  generateCode(): number {
    return Math.floor(1000 + Math.random() * 9000);
  }
}