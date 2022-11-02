export interface DateDataType {
  decideCnt: string;
  stateDt: string;
  stateTime: string;
}

export interface DateListType {
  data: {
    item: DateDataType[];
  };
}

export interface AgeGenderType {
  stateDt: string;
  confCase: string;
  gubun: string;
}

export interface AgeGenderDataType {
  data: {
    item: AgeGenderType[];
  };
}
