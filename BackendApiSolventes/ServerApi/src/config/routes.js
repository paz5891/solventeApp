import { Router } from 'express'

//=========================================================================
//  CATALOG
//=========================================================================
import ControllerAddressCatalog from '../controllers/Catalog/ControllerAddressCatalog/route'
import ControllerAttachmentCatalog from '../controllers/Catalog/ControllerAttachmentCatalog/route'
import ControllerAttachmentCatalogPolicy from '../controllers/Catalog/ControllerAttachmentCatalogPolicy/route'
import ControllerBouquet from '../controllers/Catalog/ControllerBouquetCatalog/route'
import ControllerBouquetTypeCatalog from '../controllers/Catalog/ControllerBouquetTypeCatalog/route'
import ControllerComercialActivityCatalog from '../controllers/Catalog/ControllerComercialActivityCatalog/route'
import ControllerCommentaryCatalog from '../controllers/Catalog/ControllerCommentaryCatalog/route'
import ControllerDepartmentCatalog from '../controllers/Catalog/ControllerDepartmentCatalog/route'
import ControllerMenuCatalog from '../controllers/Catalog/ControllerMenuCatalog/route'
import ControllerMunicipalityCatalog from '../controllers/Catalog/ControllerMunicipalityCatalog/route'
import ControllerPhoneCatalog from '../controllers/Catalog/ControllerPhoneCatalog/route'
import ControllerPolicyStatusCatalog from '../controllers/Catalog/ControllerPolicyStatusCatalog/route'
import ControllerRolCatalog from '../controllers/Catalog/ControllerRolCatalog/route'
import ControllerTypePerson from '../controllers/Catalog/ControllerTypePersonCatalog/route'
import ControllerPaymentStatusCatalog from '../controllers/Catalog/ControllerPaymentStatusCatalog/route'
import ControllerRequirementStatusCatalog from '../controllers/Catalog/ControllerRequirementStatusCatalog/route'
import ControllerTypePaymentsCatalog from '../controllers/Catalog/ControllerTypePaymentsCatalog/route'
import ControllerPolicyComment from '../controllers/Catalog/ControllerPolicyComment/route'
import ControllerPolicyAttachmentComment from '../controllers/Catalog/ControllerPolicyAttachmentComment/route'

//================================================================================
import ControllerAddress from '../controllers/FunctionalControllers/ControllerAddress/route'
import ControllerAgent from '../controllers/FunctionalControllers/ControllerAgent/route'
import ControllerAnalystAssignment from '../controllers/FunctionalControllers/ControllerAnalystAssignment/route'
import ControllerAttachment from '../controllers/FunctionalControllers/ControllerAttachment/route'
import ControllerAttachmentPolicy from '../controllers/FunctionalControllers/ControllerAttachmentPolicy/route'
import ControllerBeneficiary from '../controllers/FunctionalControllers/ControllerBeneficiary/route'
import ControllerBeneficiaryAssignment from '../controllers/FunctionalControllers/ControllerBeneficiaryAssignment/route'
import ControllerPerson from '../controllers/FunctionalControllers/ControllerPerson/route'
import ControllerPhone from '../controllers/FunctionalControllers/ControllerPhone/route'
import ControllerPolicy from '../controllers/FunctionalControllers/ControllerPolicy/route'
import ControllerRolMenu from '../controllers/FunctionalControllers/ControllerRolMenu/route'
import ControllerSibPeriod from '../controllers/FunctionalControllers/ControllerSibPeriod/route'
import ControllerTrust from '../controllers/FunctionalControllers/ControllerTrust/route'
import ControllerUserSystem from '../controllers/FunctionalControllers/ControllerUserSystem/route'
import ControllerPayments from '../controllers/FunctionalControllers/ControllerPayments/route'
import ControllerPaymentRequirements from '../controllers/FunctionalControllers/ControllerPaymentRequirements/route'
import ControllerLogin from '../controllers/FunctionalControllers/ControllerLogin/route'
//================================================================================

const router = new Router()
//=========================================================================
//  CatalogBouquetType
//=========================================================================
router.use('/bouquet_type', ControllerBouquetTypeCatalog)

//=========================================================================
// Analyst Assignment
//=========================================================================
router.use('/analystassignment', ControllerAnalystAssignment)

//=========================================================================
// Beneficiary Assignment
//=========================================================================
router.use('/beneficiaryassignment', ControllerBeneficiaryAssignment)

//=========================================================================
// Policy
//=========================================================================
router.use('/policy', ControllerPolicy)

//=========================================================================
// PolicyStatusCatalog 
//=========================================================================
router.use('/policystatuscatalog', ControllerPolicyStatusCatalog)

//=========================================================================
// ROLCATALOG  
//=========================================================================
router.use('/rolcatalog', ControllerRolCatalog)

//=========================================================================
//  AttachmentCatalogPolicy
//=========================================================================
router.use('/attachmentcatalogpolicy', ControllerAttachmentCatalogPolicy)

//=========================================================================
//  AttachmentCatalog
//=========================================================================
router.use('/attachmentcatalog', ControllerAttachmentCatalog)

//=========================================================================
//  MenuCatalog
//=========================================================================
router.use('/menucatalog', ControllerMenuCatalog)

//=========================================================================
//  RolMenu
//=========================================================================
router.use('/rolmenu', ControllerRolMenu)

//=========================================================================
//  AddressCatalog
//=========================================================================
router.use('/addresscatalog', ControllerAddressCatalog)

//=========================================================================
//  DepartmentCatalog
//=========================================================================
router.use('/departmentcatalog', ControllerDepartmentCatalog)

//=========================================================================
//  MunicipalityCatalog
//=========================================================================
router.use('/municipalitycatalog/', ControllerMunicipalityCatalog)

//=========================================================================
//  PhoneCatalog
//=========================================================================
router.use('/phonecatalog', ControllerPhoneCatalog)

//=========================================================================
//  CatalogTypePerson
//=========================================================================
router.use('/typepersoncatalog', ControllerTypePerson)

//=========================================================================
//  ComercialActivityCatalog
//=========================================================================
router.use('/comercialactivitycatalog', ControllerComercialActivityCatalog)

//=========================================================================
//  CatalogCommentary
//=========================================================================
router.use('/commentarycatalog', ControllerCommentaryCatalog)

//=========================================================================
// Person
//=========================================================================
router.use('/person', ControllerPerson)

//=========================================================================
// UserSystem
//=========================================================================
router.use('/usersystem', ControllerUserSystem)

//=========================================================================
// Agent
//=========================================================================
router.use('/agent', ControllerAgent)
//=========================================================================
// Beneficiary
//=========================================================================
router.use('/beneficiary', ControllerBeneficiary);
//=========================================================================
//  Trust
//=========================================================================
router.use('/trust', ControllerTrust);

//=========================================================================
//  Phone
//=========================================================================
router.use('/phone', ControllerPhone)

//=========================================================================
//  Address
//=========================================================================
router.use('/address', ControllerAddress)

//=========================================================================
//  Attachment
//=========================================================================
router.use('/attachment', ControllerAttachment)

//=========================================================================
//  Attachment Policy
//=========================================================================
router.use('/attachmentpolicy', ControllerAttachmentPolicy)

//=========================================================================
//  Bouquet
//=========================================================================
router.use('/bouquet',ControllerBouquet)

//=========================================================================
//  SibPeriod
//=========================================================================
router.use('/sibperiod', ControllerSibPeriod)

//=========================================================================
//  Payments
//=========================================================================
router.use('/payments', ControllerPayments)

//=========================================================================
//  Payment Requirements
//=========================================================================
router.use('/paymentrequirements', ControllerPaymentRequirements)

//=========================================================================
//  PaymentStatusCatalog
//=========================================================================
router.use('/paymentstatuscatalog', ControllerPaymentStatusCatalog)

//=========================================================================
//  Payment Requirements
//=========================================================================
router.use('/paymentrequirements', ControllerPaymentRequirements)

//=========================================================================
//  RequirementStatusCatalog
//=========================================================================
router.use('/requirementstatuscatalog', ControllerRequirementStatusCatalog)

//=========================================================================
//  TypePaymentsCatalog
//=========================================================================
router.use('/typepaymentscatalog', ControllerTypePaymentsCatalog)

//=========================================================================
//  ControllerPolicyComment
//=========================================================================
router.use('/policycomment', ControllerPolicyComment)

//=========================================================================
//  ControllerPolicyAttachmentComment
//=========================================================================
router.use('/policycommentattachment', ControllerPolicyAttachmentComment)

//=========================================================================
//  ControllerLogin
//=========================================================================
router.use('/session', ControllerLogin)

export default router