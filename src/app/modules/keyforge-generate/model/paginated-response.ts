export interface PaginatedResponse<T> {
  content: T[],
  totalPages: number,
  size: number,
}
