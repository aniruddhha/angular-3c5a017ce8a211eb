export interface AppRes {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Array<CustData>;
    support: Support;
}

export interface CustData {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

export interface Support {
    url: string;
    text: string;
}