import { CategoryDTO } from "./category-dto";

export interface ModuleDTO {

    id: number;
    name: string;
    description: string;
    categories: CategoryDTO[];

}
