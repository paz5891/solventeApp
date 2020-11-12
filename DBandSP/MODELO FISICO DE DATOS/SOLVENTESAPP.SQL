/*
Created: 21/08/2020
Modified: 30/10/2020
Model: SOLVENTESAPP
Database: MS SQL Server 2017
*/


-- Create tables section -------------------------------------------------

-- Table person

CREATE TABLE [person]
(
 [id_person] Int IDENTITY(1000,1) NOT NULL,
 [id_rol] Int NULL,
 [id_municipality] Int NULL,
 [id_type_person] Int NULL,
 [id_comercial_activity] Int NULL,
 [nit] Varchar(16) NULL,
 [cui] Varchar(32) NULL,
 [first_name] Varchar(128) NULL,
 [second_name] Varchar(128) NULL,
 [first_surname] Varchar(128) NULL,
 [second_surname] Varchar(128) NULL,
 [date_of_birth] Date NULL,
 [business_name] Varchar(128) NULL,
 [constitution_date] Date NULL,
 [commercial_patent_number] Varchar(32) NULL,
 [email] Varchar(128) NULL,
 [avatar] Varchar(128) NULL,
 [sexo] Char(1) NULL,
 [disabled] Bit DEFAULT 0 NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table person

CREATE INDEX [IX_Relationship4] ON [person] ([id_rol])
go

CREATE INDEX [IX_Relationship13] ON [person] ([id_municipality])
go

CREATE INDEX [IX_Relationship14] ON [person] ([id_type_person])
go

CREATE INDEX [IX_Relationship19] ON [person] ([id_comercial_activity])
go

-- Add keys for table person

ALTER TABLE [person] ADD CONSTRAINT [PK_person] PRIMARY KEY ([id_person])
go

-- Table municipality

CREATE TABLE [municipality]
(
 [id_municipality] Int IDENTITY(1000,1) NOT NULL,
 [id_department] Int NULL,
 [municipality] Varchar(128) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table municipality

CREATE INDEX [IX_Relationship8] ON [municipality] ([id_department])
go

-- Add keys for table municipality

ALTER TABLE [municipality] ADD CONSTRAINT [PK_municipality] PRIMARY KEY ([id_municipality])
go

-- Table department

CREATE TABLE [department]
(
 [id_department] Int IDENTITY(1000,1) NOT NULL,
 [department] Varchar(128) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table department

ALTER TABLE [department] ADD CONSTRAINT [PK_department] PRIMARY KEY ([id_department])
go

-- Table type_person

CREATE TABLE [type_person]
(
 [id_type_person] Int IDENTITY(1000,1) NOT NULL,
 [type_person] Varchar(64) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table type_person

ALTER TABLE [type_person] ADD CONSTRAINT [PK_type_person] PRIMARY KEY ([id_type_person])
go

-- Table catalog_menu

CREATE TABLE [catalog_menu]
(
 [id_menu] Int IDENTITY(1000,1) NOT NULL,
 [menu] Varchar(64) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table catalog_menu

ALTER TABLE [catalog_menu] ADD CONSTRAINT [PK_catalog_menu] PRIMARY KEY ([id_menu])
go

-- Table rol_menu

CREATE TABLE [rol_menu]
(
 [id_rol_menu] Int IDENTITY(1000,1) NOT NULL,
 [id_menu] Int NULL,
 [id_rol] Int NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table rol_menu

CREATE INDEX [IX_Relationship2] ON [rol_menu] ([id_menu])
go

CREATE INDEX [IX_Relationship3] ON [rol_menu] ([id_rol])
go

-- Add keys for table rol_menu

ALTER TABLE [rol_menu] ADD CONSTRAINT [PK_rol_menu] PRIMARY KEY ([id_rol_menu])
go

-- Table rol

CREATE TABLE [rol]
(
 [id_rol] Int IDENTITY(1000,1) NOT NULL,
 [rol] Varchar(64) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table rol

ALTER TABLE [rol] ADD CONSTRAINT [PK_rol] PRIMARY KEY ([id_rol])
go

-- Table trust

CREATE TABLE [trust]
(
 [id_trust] Int IDENTITY(1000,1) NOT NULL,
 [id_person] Int NULL,
 [disabled] Bit DEFAULT 0 NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table trust

CREATE INDEX [IX_Relationship9] ON [trust] ([id_person])
go

-- Add keys for table trust

ALTER TABLE [trust] ADD CONSTRAINT [PK_trust] PRIMARY KEY ([id_trust])
go

-- Table agent

CREATE TABLE [agent]
(
 [id_agent] Int IDENTITY(1000,1) NOT NULL,
 [id_person] Int NULL,
 [disabled] Bit DEFAULT 0 NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table agent

CREATE INDEX [IX_Relationship10] ON [agent] ([id_person])
go

-- Add keys for table agent

ALTER TABLE [agent] ADD CONSTRAINT [PK_agent] PRIMARY KEY ([id_agent])
go

-- Table beneficiary

CREATE TABLE [beneficiary]
(
 [id_beneficiary] Int IDENTITY(1000,1) NOT NULL,
 [id_person] Int NULL,
 [disabled] Bit DEFAULT 0 NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table beneficiary

CREATE INDEX [IX_Relationship11] ON [beneficiary] ([id_person])
go

-- Add keys for table beneficiary

ALTER TABLE [beneficiary] ADD CONSTRAINT [PK_beneficiary] PRIMARY KEY ([id_beneficiary])
go

-- Table usersystem

CREATE TABLE [usersystem]
(
 [id_user] Int IDENTITY(1000,1) NOT NULL,
 [id_person] Int NULL,
 [username] Varchar(64) NOT NULL,
 [password] Varchar(256) NOT NULL,
 [disabled] Bit DEFAULT 0 NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table usersystem

CREATE INDEX [IX_Relationship12] ON [usersystem] ([id_person])
go

-- Add keys for table usersystem

ALTER TABLE [usersystem] ADD CONSTRAINT [PK_usersystem] PRIMARY KEY ([id_user])
go

-- Table attachment_catalog

CREATE TABLE [attachment_catalog]
(
 [id_attachment_catalog] Int IDENTITY(1000,1) NOT NULL,
 [attachment] Varchar(128) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table attachment_catalog

ALTER TABLE [attachment_catalog] ADD CONSTRAINT [PK_attachment_catalog] PRIMARY KEY ([id_attachment_catalog])
go

-- Table attachment

CREATE TABLE [attachment]
(
 [id_attachment_person] Int IDENTITY(1000,1) NOT NULL,
 [id_person] Int NULL,
 [id_attachment_catalog] Int NULL,
 [attachment] Varchar(max) NULL,
 [description] Varchar(max) NULL,
 [date] Datetime NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table attachment

CREATE INDEX [IX_Relationship15] ON [attachment] ([id_person])
go

CREATE INDEX [IX_Relationship25] ON [attachment] ([id_attachment_catalog])
go

-- Add keys for table attachment

ALTER TABLE [attachment] ADD CONSTRAINT [PK_attachment] PRIMARY KEY ([id_attachment_person])
go

-- Table phone_catalog

CREATE TABLE [phone_catalog]
(
 [id_phone_catalog] Int IDENTITY(1000,1) NOT NULL,
 [type_phone] Varchar(64) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table phone_catalog

ALTER TABLE [phone_catalog] ADD CONSTRAINT [PK_phone_catalog] PRIMARY KEY ([id_phone_catalog])
go

-- Table phone

CREATE TABLE [phone]
(
 [id_phone] Int IDENTITY(1000,1) NOT NULL,
 [id_person] Int NULL,
 [id_phone_catalog] Int NULL,
 [phone] Varchar(16) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table phone

CREATE INDEX [IX_Relationship23] ON [phone] ([id_person])
go

CREATE INDEX [IX_Relationship24] ON [phone] ([id_phone_catalog])
go

-- Add keys for table phone

ALTER TABLE [phone] ADD CONSTRAINT [PK_phone] PRIMARY KEY ([id_phone])
go

-- Table address_catalog

CREATE TABLE [address_catalog]
(
 [id_address_catalog] Int IDENTITY(1000,1) NOT NULL,
 [type_address] Varchar(64) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table address_catalog

ALTER TABLE [address_catalog] ADD CONSTRAINT [PK_address_catalog] PRIMARY KEY ([id_address_catalog])
go

-- Table comercial_activity

CREATE TABLE [comercial_activity]
(
 [id_comercial_activity] Int IDENTITY(1000,1) NOT NULL,
 [comercial_activity] Varchar(128) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table comercial_activity

ALTER TABLE [comercial_activity] ADD CONSTRAINT [PK_comercial_activity] PRIMARY KEY ([id_comercial_activity])
go

-- Table address

CREATE TABLE [address]
(
 [id_address] Int IDENTITY(1000,1) NOT NULL,
 [id_person] Int NULL,
 [id_address_catalog] Int NULL,
 [address] Varchar(128) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table address

CREATE INDEX [IX_Relationship20] ON [address] ([id_address_catalog])
go

CREATE INDEX [IX_Relationship21] ON [address] ([id_person])
go

-- Add keys for table address

ALTER TABLE [address] ADD CONSTRAINT [PK_address] PRIMARY KEY ([id_address])
go

-- Table commentary

CREATE TABLE [commentary]
(
 [id_commentary] Int IDENTITY(1000,1) NOT NULL,
 [id_person] Int NULL,
 [commentary] Varchar(max) NOT NULL,
 [date] Datetime NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table commentary

CREATE INDEX [IX_Relationship22] ON [commentary] ([id_person])
go

-- Add keys for table commentary

ALTER TABLE [commentary] ADD CONSTRAINT [PK_commentary] PRIMARY KEY ([id_commentary])
go

-- Table bouquet

CREATE TABLE [bouquet]
(
 [id_bouquet] Int IDENTITY(1000,1) NOT NULL,
 [bouquet] Varchar(32) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table bouquet

ALTER TABLE [bouquet] ADD CONSTRAINT [PK_bouquet] PRIMARY KEY ([id_bouquet])
go

-- Table bouquet_type

CREATE TABLE [bouquet_type]
(
 [id_bouquet_type] Int IDENTITY(1000,1) NOT NULL,
 [id_bouquet] Int NULL,
 [bouquet_type] Varchar(64) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table bouquet_type

CREATE INDEX [IX_Relationship37] ON [bouquet_type] ([id_bouquet])
go

-- Add keys for table bouquet_type

ALTER TABLE [bouquet_type] ADD CONSTRAINT [PK_bouquet_type] PRIMARY KEY ([id_bouquet_type])
go

-- Table policy

CREATE TABLE [policy]
(
 [id_policy] Int IDENTITY(1000,1) NOT NULL,
 [identifier] Varchar(36) NOT NULL,
 [id_trust] Int NULL,
 [id_agent] Int NULL,
 [id_user] Int NULL,
 [id_bouquet] Int NULL,
 [id_bouquet_type] Int NULL,
 [id_policy_status] Int NULL,
 [id_sib_period] Int NULL,
 [creation_date] Datetime NULL,
 [prima] Decimal(10,2) NULL,
 [contract_amount] Decimal(10,2) NULL,
 [insured_amount] Decimal(10,2) NULL,
 [iva] Decimal(10,2) NULL,
 [emission_rights] Decimal(10,2) NULL,
 [financing_surcharges] Decimal(10,2) NULL,
 [cancellation_date] Date NULL,
 [validity] Int NULL,
 [renewal] Int DEFAULT 0 NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table policy

CREATE INDEX [IX_Relationship34] ON [policy] ([id_trust])
go

CREATE INDEX [IX_Relationship35] ON [policy] ([id_agent])
go

CREATE INDEX [IX_Relationship38] ON [policy] ([id_policy_status])
go

CREATE INDEX [IX_Relationship39] ON [policy] ([id_bouquet_type])
go

CREATE INDEX [IX_Relationship40] ON [policy] ([id_bouquet])
go

CREATE INDEX [IX_Relationship43] ON [policy] ([id_user])
go

CREATE INDEX [IX_Relationship54] ON [policy] ([id_sib_period])
go

-- Add keys for table policy

ALTER TABLE [policy] ADD CONSTRAINT [PK_policy] PRIMARY KEY ([id_policy])
go

-- Table analyst_assignment

CREATE TABLE [analyst_assignment]
(
 [id_analyst_assignment] Int IDENTITY(1000,1) NOT NULL,
 [id_policy] Int NULL,
 [id_user] Int NULL,
 [status] Varchar(32) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table analyst_assignment

CREATE INDEX [IX_Relationship41] ON [analyst_assignment] ([id_policy])
go

CREATE INDEX [IX_Relationship42] ON [analyst_assignment] ([id_user])
go

-- Add keys for table analyst_assignment

ALTER TABLE [analyst_assignment] ADD CONSTRAINT [PK_analyst_assignment] PRIMARY KEY ([id_analyst_assignment])
go

-- Table policy_status

CREATE TABLE [policy_status]
(
 [id_policy_status] Int IDENTITY(1000,1) NOT NULL,
 [policy_status] Varchar(32) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table policy_status

ALTER TABLE [policy_status] ADD CONSTRAINT [PK_policy_status] PRIMARY KEY ([id_policy_status])
go

-- Table beneficiary_assignment

CREATE TABLE [beneficiary_assignment]
(
 [id_beneficiary] Int NOT NULL,
 [id_policy] Int NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table beneficiary_assignment

ALTER TABLE [beneficiary_assignment] ADD CONSTRAINT [PK_beneficiary_assignment] PRIMARY KEY ([id_beneficiary],[id_policy])
go

-- Table sib_period

CREATE TABLE [sib_period]
(
 [id_sib_period] Int IDENTITY(1000,1) NOT NULL,
 [id_user_open] Int NULL,
 [id_user_closed] Int NULL,
 [end_date] Date NOT NULL,
 [date_open] Datetime NULL,
 [date_closed] Date NULL,
 [disabled] Bit DEFAULT 0 NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table sib_period

CREATE INDEX [IX_Relationship55] ON [sib_period] ([id_user_open])
go

CREATE INDEX [IX_Relationship56] ON [sib_period] ([id_user_closed])
go

-- Add keys for table sib_period

ALTER TABLE [sib_period] ADD CONSTRAINT [PK_sib_period] PRIMARY KEY ([id_sib_period])
go

-- Table attachment_catalog_policy

CREATE TABLE [attachment_catalog_policy]
(
 [id_attachment_catalog_policy] Int IDENTITY(1000,1) NOT NULL,
 [attachment_catalog_policy] Varchar(128) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table attachment_catalog_policy

ALTER TABLE [attachment_catalog_policy] ADD CONSTRAINT [PK_attachment_catalog_policy] PRIMARY KEY ([id_attachment_catalog_policy])
go

-- Table attachment_policy

CREATE TABLE [attachment_policy]
(
 [id_attachment_policy] Int IDENTITY(1000,1) NOT NULL,
 [id_policy] Int NULL,
 [id_attachment_catalog_policy] Int NULL,
 [attachment] Varchar(max) NULL,
 [description] Varchar(max) NULL,
 [creation_date] Date NOT NULL,
 [check] Bit DEFAULT 0 NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table attachment_policy

CREATE INDEX [IX_Relationship52] ON [attachment_policy] ([id_policy])
go

CREATE INDEX [IX_Relationship53] ON [attachment_policy] ([id_attachment_catalog_policy])
go

-- Add keys for table attachment_policy

ALTER TABLE [attachment_policy] ADD CONSTRAINT [PK_attachment_policy] PRIMARY KEY ([id_attachment_policy])
go

-- Table requirement_status

CREATE TABLE [requirement_status]
(
 [id_requirement_status] Int IDENTITY(1000,1) NOT NULL,
 [requirement_status] Varchar(128) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table requirement_status

ALTER TABLE [requirement_status] ADD CONSTRAINT [PK_requirement_status] PRIMARY KEY ([id_requirement_status])
go

-- Table payment_status

CREATE TABLE [payment_status]
(
 [id_payment_status] Int IDENTITY(1000,1) NOT NULL,
 [payment_status] Varchar(128) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table payment_status

ALTER TABLE [payment_status] ADD CONSTRAINT [PK_payment_status] PRIMARY KEY ([id_payment_status])
go

-- Table type_payments

CREATE TABLE [type_payments]
(
 [id_type_payments] Int IDENTITY(1000,1) NOT NULL,
 [type_payments] Varchar(128) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Add keys for table type_payments

ALTER TABLE [type_payments] ADD CONSTRAINT [PK_type_payments] PRIMARY KEY ([id_type_payments])
go

-- Table payment_requirements

CREATE TABLE [payment_requirements]
(
 [id_payment_requirements] Int IDENTITY(1000,1) NOT NULL,
 [correlative] Int NOT NULL,
 [id_requirement_status] Int NULL,
 [id_policy] Int NOT NULL,
 [id_user_creator_requirement] Int NULL,
 [id_user_payment_requirements] Int NULL,
 [request_date] Datetime NOT NULL,
 [expiration_date] Date NOT NULL,
 [prima_pending_payment] Decimal(10,2) NOT NULL,
 [iva] Decimal(10,2) NOT NULL,
 [emission_rights] Decimal(10,2) NOT NULL,
 [surcharge] Decimal(10,2) NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table payment_requirements

CREATE INDEX [IX_Relationship59] ON [payment_requirements] ([id_policy])
go

CREATE INDEX [IX_Relationship60] ON [payment_requirements] ([id_requirement_status])
go

CREATE INDEX [IX_Relationship64] ON [payment_requirements] ([id_user_creator_requirement])
go

CREATE INDEX [IX_Relationship65] ON [payment_requirements] ([id_user_payment_requirements])
go

-- Add keys for table payment_requirements

ALTER TABLE [payment_requirements] ADD CONSTRAINT [PK_payment_requirements] PRIMARY KEY ([id_payment_requirements])
go

-- Table payments

CREATE TABLE [payments]
(
 [id_payments] Int IDENTITY(1000,1) NOT NULL,
 [id_payment_requirements] Int NULL,
 [id_type_payments] Int NULL,
 [id_payment_status] Int NULL,
 [id_user_payments] Int NULL,
 [amount] Decimal(10,2) NOT NULL,
 [payment_date] Datetime NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table payments

CREATE INDEX [IX_Relationship62] ON [payments] ([id_type_payments])
go

CREATE INDEX [IX_Relationship63] ON [payments] ([id_payment_status])
go

CREATE INDEX [IX_Relationship66] ON [payments] ([id_user_payments])
go

CREATE INDEX [IX_Relationship68] ON [payments] ([id_payment_requirements])
go

-- Add keys for table payments

ALTER TABLE [payments] ADD CONSTRAINT [PK_payments] PRIMARY KEY ([id_payments])
go

-- Table policy_comment

CREATE TABLE [policy_comment]
(
 [id_comment] Int IDENTITY(1000,1) NOT NULL,
 [id_policy] Int NULL,
 [id_user] Int NULL,
 [id_attachment_policy] Int NULL,
 [comment] Varchar(max) NOT NULL,
 [creation_date] Datetime NOT NULL,
 [check] Bit DEFAULT 0 NOT NULL,
 [DW] Char(1) DEFAULT 0 NOT NULL
)
go

-- Create indexes for table policy_comment

CREATE INDEX [IX_Relationship69] ON [policy_comment] ([id_policy])
go

CREATE INDEX [IX_Relationship70] ON [policy_comment] ([id_user])
go

CREATE INDEX [IX_Relationship71] ON [policy_comment] ([id_attachment_policy])
go

-- Add keys for table policy_comment

ALTER TABLE [policy_comment] ADD CONSTRAINT [PK_policy_comment] PRIMARY KEY ([id_comment])
go

-- Create foreign keys (relationships) section ------------------------------------------------- 


ALTER TABLE [rol_menu] ADD CONSTRAINT [Relationship2] FOREIGN KEY ([id_menu]) REFERENCES [catalog_menu] ([id_menu]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [rol_menu] ADD CONSTRAINT [Relationship3] FOREIGN KEY ([id_rol]) REFERENCES [rol] ([id_rol]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [person] ADD CONSTRAINT [Relationship4] FOREIGN KEY ([id_rol]) REFERENCES [rol] ([id_rol]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [municipality] ADD CONSTRAINT [Relationship8] FOREIGN KEY ([id_department]) REFERENCES [department] ([id_department]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [trust] ADD CONSTRAINT [Relationship9] FOREIGN KEY ([id_person]) REFERENCES [person] ([id_person]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [agent] ADD CONSTRAINT [Relationship10] FOREIGN KEY ([id_person]) REFERENCES [person] ([id_person]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [beneficiary] ADD CONSTRAINT [Relationship11] FOREIGN KEY ([id_person]) REFERENCES [person] ([id_person]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [usersystem] ADD CONSTRAINT [Relationship12] FOREIGN KEY ([id_person]) REFERENCES [person] ([id_person]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [person] ADD CONSTRAINT [Relationship13] FOREIGN KEY ([id_municipality]) REFERENCES [municipality] ([id_municipality]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [person] ADD CONSTRAINT [Relationship14] FOREIGN KEY ([id_type_person]) REFERENCES [type_person] ([id_type_person]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [attachment] ADD CONSTRAINT [Relationship15] FOREIGN KEY ([id_person]) REFERENCES [person] ([id_person]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [person] ADD CONSTRAINT [Relationship19] FOREIGN KEY ([id_comercial_activity]) REFERENCES [comercial_activity] ([id_comercial_activity]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [address] ADD CONSTRAINT [Relationship20] FOREIGN KEY ([id_address_catalog]) REFERENCES [address_catalog] ([id_address_catalog]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [address] ADD CONSTRAINT [Relationship21] FOREIGN KEY ([id_person]) REFERENCES [person] ([id_person]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [commentary] ADD CONSTRAINT [Relationship22] FOREIGN KEY ([id_person]) REFERENCES [person] ([id_person]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [phone] ADD CONSTRAINT [Relationship23] FOREIGN KEY ([id_person]) REFERENCES [person] ([id_person]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [phone] ADD CONSTRAINT [Relationship24] FOREIGN KEY ([id_phone_catalog]) REFERENCES [phone_catalog] ([id_phone_catalog]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [attachment] ADD CONSTRAINT [Relationship25] FOREIGN KEY ([id_attachment_catalog]) REFERENCES [attachment_catalog] ([id_attachment_catalog]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [policy] ADD CONSTRAINT [Relationship34] FOREIGN KEY ([id_trust]) REFERENCES [trust] ([id_trust]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [policy] ADD CONSTRAINT [Relationship35] FOREIGN KEY ([id_agent]) REFERENCES [agent] ([id_agent]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [bouquet_type] ADD CONSTRAINT [Relationship37] FOREIGN KEY ([id_bouquet]) REFERENCES [bouquet] ([id_bouquet]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [policy] ADD CONSTRAINT [Relationship38] FOREIGN KEY ([id_policy_status]) REFERENCES [policy_status] ([id_policy_status]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [policy] ADD CONSTRAINT [Relationship39] FOREIGN KEY ([id_bouquet_type]) REFERENCES [bouquet_type] ([id_bouquet_type]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [policy] ADD CONSTRAINT [Relationship40] FOREIGN KEY ([id_bouquet]) REFERENCES [bouquet] ([id_bouquet]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [analyst_assignment] ADD CONSTRAINT [Relationship41] FOREIGN KEY ([id_policy]) REFERENCES [policy] ([id_policy]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [analyst_assignment] ADD CONSTRAINT [Relationship42] FOREIGN KEY ([id_user]) REFERENCES [usersystem] ([id_user]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [policy] ADD CONSTRAINT [Relationship43] FOREIGN KEY ([id_user]) REFERENCES [usersystem] ([id_user]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [beneficiary_assignment] ADD CONSTRAINT [Relationship46] FOREIGN KEY ([id_beneficiary]) REFERENCES [beneficiary] ([id_beneficiary]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [beneficiary_assignment] ADD CONSTRAINT [Relationship47] FOREIGN KEY ([id_policy]) REFERENCES [policy] ([id_policy]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [attachment_policy] ADD CONSTRAINT [Relationship52] FOREIGN KEY ([id_policy]) REFERENCES [policy] ([id_policy]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [attachment_policy] ADD CONSTRAINT [Relationship53] FOREIGN KEY ([id_attachment_catalog_policy]) REFERENCES [attachment_catalog_policy] ([id_attachment_catalog_policy]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [policy] ADD CONSTRAINT [Relationship54] FOREIGN KEY ([id_sib_period]) REFERENCES [sib_period] ([id_sib_period]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [sib_period] ADD CONSTRAINT [Relationship55] FOREIGN KEY ([id_user_open]) REFERENCES [usersystem] ([id_user]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [sib_period] ADD CONSTRAINT [Relationship56] FOREIGN KEY ([id_user_closed]) REFERENCES [usersystem] ([id_user]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [payment_requirements] ADD CONSTRAINT [Relationship59] FOREIGN KEY ([id_policy]) REFERENCES [policy] ([id_policy]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [payment_requirements] ADD CONSTRAINT [Relationship60] FOREIGN KEY ([id_requirement_status]) REFERENCES [requirement_status] ([id_requirement_status]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [payments] ADD CONSTRAINT [Relationship62] FOREIGN KEY ([id_type_payments]) REFERENCES [type_payments] ([id_type_payments]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [payments] ADD CONSTRAINT [Relationship63] FOREIGN KEY ([id_payment_status]) REFERENCES [payment_status] ([id_payment_status]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [payment_requirements] ADD CONSTRAINT [Relationship64] FOREIGN KEY ([id_user_creator_requirement]) REFERENCES [usersystem] ([id_user]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [payment_requirements] ADD CONSTRAINT [Relationship65] FOREIGN KEY ([id_user_payment_requirements]) REFERENCES [usersystem] ([id_user]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [payments] ADD CONSTRAINT [Relationship66] FOREIGN KEY ([id_user_payments]) REFERENCES [usersystem] ([id_user]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [payments] ADD CONSTRAINT [Relationship68] FOREIGN KEY ([id_payment_requirements]) REFERENCES [payment_requirements] ([id_payment_requirements]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [policy_comment] ADD CONSTRAINT [Relationship69] FOREIGN KEY ([id_policy]) REFERENCES [policy] ([id_policy]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [policy_comment] ADD CONSTRAINT [Relationship70] FOREIGN KEY ([id_user]) REFERENCES [usersystem] ([id_user]) ON UPDATE NO ACTION ON DELETE NO ACTION
go


ALTER TABLE [policy_comment] ADD CONSTRAINT [Relationship71] FOREIGN KEY ([id_attachment_policy]) REFERENCES [attachment_policy] ([id_attachment_policy]) ON UPDATE NO ACTION ON DELETE NO ACTION
go




