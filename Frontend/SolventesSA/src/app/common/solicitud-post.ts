import { AttachmentPolicy } from './attachment-policy';

export class SolicitudPost {
    id_trust: number;
    id_agent: number; 
    id_user: number; 
    id_bouquet: number; 
    id_bouquet_type: number; 
    id_sib_period: number; 
    prima: number; 
    contract_amount: number; 
    insured_amount: number;
    iva: number; 
    emission_rights: number; 
    financing_surcharges: number;
    validity: number;
    beneficiary: BeneficiaryPost[] = [];
    attachment_policy: AttachmentPolicy[] = [];
}
export interface BeneficiaryPost {
    id_beneficiary: number;
}