import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@hmbmk/ticket-common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
