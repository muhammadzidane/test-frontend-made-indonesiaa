export interface IHomeAnswer {
  id: string;
  value: string;
}

export interface ILimit {
  minutes: number;
  seconds: number;
}

export interface IHomeState {
  currentStep: number;
  answers: IHomeAnswer[];
  limit: ILimit;
}
