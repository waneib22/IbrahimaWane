import { DocumentDTO } from "./document-dto";

export interface CategoryDTO {

    id: number;
    name: string;
    description: string;
    moduleId: number;
    documents: DocumentDTO[];
    
}
