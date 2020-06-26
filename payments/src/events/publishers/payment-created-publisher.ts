import { Subjects, Publisher, PaymentCreatedEvent } from '@hmbmk/ticket-common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
