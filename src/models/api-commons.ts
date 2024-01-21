export interface InfoType {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ApiPaginatedReponse<DataType> {
  info: InfoType;
  results: DataType[];
}
