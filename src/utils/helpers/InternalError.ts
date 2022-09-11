import { AxiosError } from "axios";

export class InternalError extends Error {
  constructor(error: any) {
    if (error instanceof AxiosError) {
      super(error.response?.data.message);
      this.name = error.name;
      this.cause = error.cause;
      this.stack = error.stack;
    } else if (error instanceof Error) {
      super(error.message);
      this.name = error.name;
      this.cause = error.cause;
      this.stack = error.stack;
    } else {
      super(error);
      this.name = "Unknown Error";
    }
  }
}
