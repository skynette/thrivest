export interface PaginationOptions {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginationResult<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export const parsePaginationQuery = (query: any): PaginationOptions => {
  const page = Math.max(1, parseInt(query.page) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(query.limit) || 10));
  const sortBy = query.sortBy || 'createdAt';
  const sortOrder = query.sortOrder === 'asc' ? 'asc' : 'desc';

  return { page, limit, sortBy, sortOrder };
};

export const createPaginationResult = <T>(
  data: T[],
  total: number,
  options: PaginationOptions
): PaginationResult<T> => {
  const { page = 1, limit = 10 } = options;
  const totalPages = Math.ceil(total / limit);
  
  return {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  };
};

export const buildSearchFilter = (searchQuery: string, searchFields: string[]) => {
  if (!searchQuery) return {};
  
  const searchConditions = searchFields.map(field => ({
    [field]: {
      contains: searchQuery,
      mode: 'insensitive' as const,
    },
  }));

  return {
    OR: searchConditions,
  };
};

export const buildDateFilter = (dateField: string, startDate?: string, endDate?: string) => {
  const filter: any = {};
  
  if (startDate || endDate) {
    filter[dateField] = {};
    if (startDate) {
      filter[dateField].gte = new Date(startDate);
    }
    if (endDate) {
      filter[dateField].lte = new Date(endDate);
    }
  }
  
  return filter;
};