import { Publisher, OrderCancelledEvent, Subjects } from '@hmbmk/ticket-common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
