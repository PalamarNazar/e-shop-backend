export interface ResponseWithPagination<T> {
  data: T;
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export interface PaginationQuery {
  page: string;
  limit: string;
}