export interface IRTKPayload<T, I = unknown> {
  body?: T;
  query?: I;
}
