import { CategoryDto } from "./category.model";

export interface ProductDto {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: CategoryDto
}

export interface ProductPage {
    content: ProductDto[];
    page: {
        totalPages: number;
        totalElements: number;
        last: boolean;
        size: number;
        number: number;
        first: boolean;
        numberOfElements: number;
        empty: boolean;
    }
}