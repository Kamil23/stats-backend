export interface Response<T = {}> {
  code: number;
  message: string;
  data: T;
}

export class ResponseSchema<T> implements Response {
  code: number;
  message: string;
  data: T;

  constructor(_code?: number, message?: string, data?: T) {
    this.code = _code ?? 200;
    this.message = message ?? '';
    this.data = data ?? null;
  }
}
