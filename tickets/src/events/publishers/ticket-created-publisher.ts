import { Publisher, Subjects, TicketCreatedEvent } from '@hmbmk/ticket-common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
