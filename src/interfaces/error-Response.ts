import {MessageResponse} from './message-Response'

export interface ErrorResponse extends MessageResponse {
  stack?: any;
}
