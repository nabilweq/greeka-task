export interface PaginationParams {
    noLimit?: boolean;
    limit?: number;
    page?: number;
}
  
export const getPaginationOptions = ({
    noLimit,
    limit = !(noLimit ?? false) && 20,
    page = 1,
}: PaginationParams): { limit: number; skip: number } => {
    if (Number(limit) > 20) {
        limit = 20;
    }
    const newLimit = Number(limit);
    const skip = (Number(page) - 1) * newLimit;

    return {
        limit: newLimit,
        skip,
    };
};
  