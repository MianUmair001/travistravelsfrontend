import * as sgMail from '@sendgrid/mail'
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../config/config.service';

@Injectable()
export class SendMail {
  constructor(
    private readonly config: ConfigService
  ) {
  }


  async sendEMail(to, subject, htmlMessage) {

    sgMail.setApiKey(this.config.sendgridApiKey);
    const message = {
      to,
      from: this.config.emailFrom,
      bcc:  this.config.emailBcc,
      subject: subject || 'Email from the Creator',
      html: `${htmlMessage}`,
    }

    try {
      return await sgMail.send(message);
    } catch (error) {
      console.log(error)
      // throw error;
    }
  }
}