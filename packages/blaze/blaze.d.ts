import { Blaze } from 'meteor/blaze';

export namespace Meteor {

  /** Event **/
  interface Event {
    type: string;
    target: HTMLElement;
    currentTarget: HTMLElement;
    which: number;
    stopPropagation(): void;
    stopImmediatePropagation(): void;
    preventDefault(): void;
    isPropagationStopped(): boolean;
    isImmediatePropagationStopped(): boolean;
    isDefaultPrevented(): boolean;
  }
  interface EventHandlerFunction extends Function {
    (event?: Event, templateInstance?: Blaze.TemplateInstance): void;
  }
  interface EventMap {
    [id: string]: EventHandlerFunction;
  }
  /** Event **/
}
