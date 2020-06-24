import { Publisher, Subjects, TicketUpdatedEvent } from '@hmbmk/ticket-common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
