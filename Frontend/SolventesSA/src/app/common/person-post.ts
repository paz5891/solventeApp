import { Address } from './address';
import { AttachmentPerson } from './attachment-person';
import { Phone } from './phone';

export class PersonPost {
    id_type_person: number;
    id_municipality: number;
    nit: string;
    email: string;
    cui: string;
    first_name: string;
    second_name: string;
    first_surname: string;
    second_surname: string;
    date_of_birth: Date;
    id_rol: number;
    sexo: string;
    business_name: string;
    constitution_date: Date;
    commercial_patent_number: string;
    id_comercial_activity: number;
    avatar: string;
    phone_person: Phone[] = [];
    address_person: Address[] = [];
    attachment_person: AttachmentPerson[] = [];
}
