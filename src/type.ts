export interface MoviesId {
    id?: string;
    title?: string;
    numberInstock?: number;
    dailyRentalRate?: number;
    liked?: boolean;
    onClick: () => void;
    color: string;
}