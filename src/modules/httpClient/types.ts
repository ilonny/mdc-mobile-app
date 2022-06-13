export type TRequestType = 'json' | 'multipart' | null;

export type TRequestOptions = {
  path: string;
  body?: any;
  method?: string;
  headers?: { [key: string]: string };
  requestType?: TRequestType;
  responseType?: string;
  callback?: Function;
};

export type AwaitType<T> = T extends Promise<infer U> ? U : T;
