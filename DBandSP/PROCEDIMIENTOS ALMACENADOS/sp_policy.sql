-- ====================================================================================================

SET ANSI_NULLS ON
GO  
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <06/10/2020>
-- Description:	<PARA CREAR UN REGISTRO DE UNA POLIZA DE EMISION>
-- =============================================
CREATE PROCEDURE sp_create_policy
    (@json NVARCHAR(MAX))
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
           /* DECLARE @json NVARCHAR(MAX);
            SET @json = N'
                {
                    "id_trust": "(int)",
                    "id_agent": "(int)",
                    "id_user": "(int)",
                    "id_bouquet": "(int)",
                    "id_bouquet_type": "(int)",
                    "id_sib_period": "(int)",
                    "prima": "(DECIMAL(10,2))",
                    "contract_amount": "(DECIMAL(10,2))",
                    "insured_amount": "(DECIMAL(10,2))",
                    "iva": "(DECIMAL(10,2))",
                    "emission_rights": "(DECIMAL(10,2))",
                    "financing_surcharges": "(DECIMAL(10,2))",
					"validity": "(int)",
                    "beneficiary": [
                        {
                        "id_beneficiary": "(int)"
                        },
                        {
                        "id_beneficiary": "(int)"
                        }
                    ],
                    "attachment_policy": [
                        {
                        "id_attachment_catalog_policy": "(int)",
                        "attachment": "(string)",
                        "description": "(string)"
                        },
                        {
                        "id_attachment_catalog_policy": "(int)",
                        "attachment": "(string)",
                        "description": "(string)"
                        }
                    ]
                    }
            ';*/

    -- POLICY
    DECLARE @id_policy INTEGER;
	DECLARE @identifier VARCHAR(36) = NEWID();
	DECLARE @id_trust INTEGER;
	DECLARE @id_agent INTEGER;
	DECLARE @id_user INTEGER;
	DECLARE @id_bouquet INTEGER;
	DECLARE @id_bouquet_type INTEGER;
	DECLARE @id_policy_status INTEGER = 1000;
	DECLARE @id_sib_period INTEGER;
	DECLARE @creation_date DATETIME = GETDATE();
	DECLARE @prima DECIMAL(10,2)
	DECLARE @contract_amount DECIMAL(10,2);
	DECLARE @insured_amount DECIMAL(10,2);
	DECLARE @iva DECIMAL(10,2);
	DECLARE @emission_rights DECIMAL(10,2);
	DECLARE @financing_surcharges DECIMAL(10,2);
	-- DECLARE @cancellation_date DATETIME;
	DECLARE @validity INTEGER;
	-- DECLARE @renewal INTEGER


    -- beneficiary
	DECLARE @countbeneficiary INTEGER
    DECLARE @id_beneficiary INTEGER;

    -- ATTACHMENT
    DECLARE @countattachment INTEGER
    DECLARE @id_attachment_catalog_policy INTEGER;
    DECLARE @attachment VARCHAR(MAX);
    DECLARE @description VARCHAR(MAX);

    
	SELECT
        @id_trust =JSON_VALUE(@json,'$.id_trust'),
        @id_agent =JSON_VALUE(@json,'$.id_agent'),
        @id_user =JSON_VALUE(@json,'$.id_user'),
        @id_bouquet =JSON_VALUE(@json,'$.id_bouquet'),
        @id_bouquet_type =JSON_VALUE(@json,'$.id_bouquet_type'),
        @id_sib_period =JSON_VALUE(@json,'$.id_sib_period'),
        @prima =JSON_VALUE(@json,'$.prima'),
        @contract_amount =JSON_VALUE(@json,'$.contract_amount'),
        @insured_amount =JSON_VALUE(@json,'$.insured_amount'),
        @iva =JSON_VALUE(@json,'$.iva'),
        @emission_rights =JSON_VALUE(@json,'$.emission_rights'),
        @financing_surcharges =JSON_VALUE(@json,'$.financing_surcharges'),
		@validity = JSON_VALUE(@json,'$.validity');

		INSERT INTO [policy]

           (identifier,
			id_trust,
			id_agent,
			id_user,
			id_bouquet,
			id_bouquet_type,
			id_policy_status,
			id_sib_period,
			creation_date,
			prima,
			contract_amount,
			insured_amount,
			iva,
			emission_rights,
			financing_surcharges,
			validity
		   )
     VALUES
           (@identifier,
			@id_trust,
			@id_agent,
			@id_user,
			@id_bouquet,
			@id_bouquet_type,
			@id_policy_status,
			@id_sib_period,
			@creation_date,
			@prima,
			@contract_amount,
			@insured_amount,
			@iva,
			@emission_rights,
			@financing_surcharges,
			@validity)

    SELECT @id_policy=id_policy FROM [policy] WHERE identifier = @identifier

    SELECT @countbeneficiary=COUNT(1) FROM OPENJSON(@json,'$.beneficiary');
    SELECT @countattachment=COUNT(1) FROM OPENJSON(@json,'$.attachment_policy');

    DECLARE @i INTEGER = 0;
    WHILE @i<@countbeneficiary
    BEGIN
        SELECT @id_beneficiary =JSON_VALUE(@json,CONCAT('$.beneficiary[',@i,'].id_beneficiary'))
        
		INSERT INTO beneficiary_assignment (id_policy,id_beneficiary)
        VALUES (@id_policy,@id_beneficiary);
        SET @i=@i+1
    END


   SET @i=0;
    WHILE @i<@countattachment
    BEGIN
        SELECT
            @id_attachment_catalog_policy= JSON_VALUE(@json,CONCAT('$.attachment_policy[',@i,'].id_attachment_catalog_policy')),
            @attachment= JSON_VALUE(@json,CONCAT('$.attachment_policy[',@i,'].attachment')),
            @description= JSON_VALUE(@json,CONCAT('$.attachment_policy[',@i,'].description'))

        INSERT INTO attachment_policy
            (id_policy,id_attachment_catalog_policy,attachment,[description],[creation_date])
        VALUES
            (@id_policy, @id_attachment_catalog_policy, @attachment, @description, GETDATE());
        SET @i=@i+1
    END
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO


-- ====================================================================================================

SET ANSI_NULLS ON
GO  
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <06/10/2020>
-- Description:	<PARA EDITAR LOS CAMPOS DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_update_policy
    (@json NVARCHAR(MAX))
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
           /* DECLARE @json NVARCHAR(MAX);
            SET @json = N'
                {
					"id_policy": "(int)",
                    "id_trust": "(int)",
                    "id_agent": "(int)",
                    "id_user": "(int)",
                    "id_bouquet": "(int)",
                    "id_bouquet_type": "(int)",
                    "prima": "(DECIMAL(10,2))",
                    "contract_amount": "(DECIMAL(10,2))",
                    "insured_amount": "(DECIMAL(10,2))",
                    "iva": "(DECIMAL(10,2))",
                    "emission_rights": "(DECIMAL(10,2))",
                    "financing_surcharges": "(DECIMAL(10,2))",
					"validity": "(int)"
                    }
            ';*/

    -- POLICY
    DECLARE @id_policy INTEGER;
	DECLARE @id_trust INTEGER;
	DECLARE @id_agent INTEGER;
	DECLARE @id_user INTEGER;
	DECLARE @id_bouquet INTEGER;
	DECLARE @id_bouquet_type INTEGER;

		-- DECLARE @id_policy_status INTEGER;
		-- DECLARE @id_state INTEGER;
		-- DECLARE @id_sib_period INTEGER;
		-- DECLARE @creation_date DATETIME;

	DECLARE @prima DECIMAL(10,2)
	DECLARE @contract_amount DECIMAL(10,2);
	DECLARE @insured_amount DECIMAL(10,2);
	DECLARE @iva DECIMAL(10,2);
	DECLARE @emission_rights DECIMAL(10,2);
	DECLARE @financing_surcharges DECIMAL(10,2);
	
		-- DECLARE @cancellation_date DATETIME;
	DECLARE @validity INTEGER;
		-- DECLARE @renewal INTEGER

	SELECT
		@id_policy =JSON_VALUE(@json,'$.id_policy'),
        @id_trust =JSON_VALUE(@json,'$.id_trust'),
        @id_agent =JSON_VALUE(@json,'$.id_agent'),
        @id_user =JSON_VALUE(@json,'$.id_user'),
        @id_bouquet =JSON_VALUE(@json,'$.id_bouquet'),
        @id_bouquet_type =JSON_VALUE(@json,'$.id_bouquet_type'),
        @prima =JSON_VALUE(@json,'$.prima'),
        @contract_amount =JSON_VALUE(@json,'$.contract_amount'),
        @insured_amount =JSON_VALUE(@json,'$.insured_amount'),
        @iva =JSON_VALUE(@json,'$.iva'),
        @emission_rights =JSON_VALUE(@json,'$.emission_rights'),
        @financing_surcharges =JSON_VALUE(@json,'$.financing_surcharges'),
		@validity = JSON_VALUE(@json,'$.validity');


			UPDATE [policy] SET
				id_trust=@id_trust,
				id_agent=@id_agent,
				id_user=@id_user,
				id_bouquet=@id_bouquet,
				id_bouquet_type=@id_bouquet_type,
				prima=@prima,
				contract_amount=@contract_amount,
				insured_amount=@insured_amount,
				iva=@iva,
				emission_rights=@emission_rights,
				financing_surcharges=@financing_surcharges,
				validity = @validity
			WHERE
				id_policy = @id_policy

			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO


-- ====================================================================================================

SET ANSI_NULLS ON
GO  
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <06/10/2020>
-- Description:	<PARA CAMBIAR EL ESTADO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_changeState_policy
(@id_policy INTEGER,@id_policy_status INTEGER)
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
		UPDATE [policy] SET id_policy_status = @id_policy_status WHERE id_policy = @id_policy;
		COMMIT TRAN
	END TRY 
	BEGIN CATCH
		ROLLBACK TRAN
	END CATCH
END
GO



-- ====================================================================================================

SET ANSI_NULLS ON
GO  
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <06/10/2020>
-- Description:	<PARA MOSTRAR TODAS LAS POLIZAS>
-- =============================================
CREATE PROCEDURE sp_search_policy_all
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
    		SELECT 
            p.id_policy,
            p.identifier,
            p.id_trust,
            p.id_agent,
            p.id_user,
            p.id_bouquet,
            b.bouquet,
            p.id_bouquet_type,
            bt.bouquet_type,
            p.id_policy_status,
            ps.policy_status,
            p.id_sib_period,
            sb.end_date,
            p.creation_date,
            p.prima,
            p.contract_amount,
            p.insured_amount,
            p.iva,
            p.emission_rights,
            p.financing_surcharges,
            p.cancellation_date,
            p.validity,
            p.renewal
            FROM [policy] AS p
            JOIN bouquet AS b ON p.id_bouquet=b.id_bouquet
            JOIN bouquet_type AS bt ON p.id_bouquet_type = bt.id_bouquet_type
            JOIN policy_status AS ps ON p.id_policy_status = ps.id_policy_status
            JOIN sib_period AS sb ON p.id_sib_period = sb.id_sib_period;
		COMMIT TRAN
	END TRY 
	BEGIN CATCH
		ROLLBACK TRAN
	END CATCH
END
GO

-- ====================================================================================================

SET ANSI_NULLS ON
GO  
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <06/10/2020>
-- Description:	<PARA MOSTRAR LAS POLIZAS POR EL ESTADO QUE POSEEN>
-- =============================================
CREATE PROCEDURE sp_search_policy_state
(@id INTEGER)
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
    		SELECT 
            p.id_policy,
            p.identifier,
            p.id_trust,
            p.id_agent,
            p.id_user,
            p.id_bouquet,
            b.bouquet,
            p.id_bouquet_type,
            bt.bouquet_type,
            p.id_policy_status,
            ps.policy_status,
            p.id_sib_period,
            sb.end_date,
            p.creation_date,
            p.prima,
            p.contract_amount,
            p.insured_amount,
            p.iva,
            p.emission_rights,
            p.financing_surcharges,
            p.cancellation_date,
            p.validity,
            p.renewal
            FROM [policy] AS p
            JOIN bouquet AS b ON p.id_bouquet=b.id_bouquet
            JOIN bouquet_type AS bt ON p.id_bouquet_type = bt.id_bouquet_type
            JOIN policy_status AS ps ON p.id_policy_status = ps.id_policy_status
            JOIN sib_period AS sb ON p.id_sib_period = sb.id_sib_period
            WHERE p.id_policy_status = @id;
		COMMIT TRAN
	END TRY 
	BEGIN CATCH
		ROLLBACK TRAN
	END CATCH
END
GO



-- ====================================================================================================

SET ANSI_NULLS ON
GO  
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <06/10/2020>
-- Description:	<PARA MOSTRAR UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_search_policy_single
(@id INTEGER)
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
    		SELECT 
            p.id_policy,
            p.identifier,
            p.id_trust,
            p.id_agent,
            p.id_user,
            p.id_bouquet,
            b.bouquet,
            p.id_bouquet_type,
            bt.bouquet_type,
            p.id_policy_status,
            ps.policy_status,
            p.id_sib_period,
            sb.end_date,
            p.creation_date,
            p.prima,
            p.contract_amount,
            p.insured_amount,
            p.iva,
            p.emission_rights,
            p.financing_surcharges,
            p.cancellation_date,
            p.validity,
            p.renewal
            FROM [policy] AS p
            JOIN bouquet AS b ON p.id_bouquet=b.id_bouquet
            JOIN bouquet_type AS bt ON p.id_bouquet_type = bt.id_bouquet_type
            JOIN policy_status AS ps ON p.id_policy_status = ps.id_policy_status
            JOIN sib_period AS sb ON p.id_sib_period = sb.id_sib_period
            WHERE p.id_policy = @id;
		COMMIT TRAN
	END TRY 
	BEGIN CATCH
		ROLLBACK TRAN
	END CATCH
END
GO

-- ====================================================================================================

SET ANSI_NULLS ON
GO  
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <06/10/2020>
-- Description:	<PARA MOSTRAR UNA POLIZA POR EL CLIENTE>
-- =============================================
CREATE PROCEDURE sp_search_policy_trust_single
(@id INTEGER)
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
    		SELECT 
            p.id_policy,
            p.identifier,
            p.id_trust,
            p.id_agent,
            p.id_user,
            p.id_bouquet,
            b.bouquet,
            p.id_bouquet_type,
            bt.bouquet_type,
            p.id_policy_status,
            ps.policy_status,
            p.id_sib_period,
            sb.end_date,
            p.creation_date,
            p.prima,
            p.contract_amount,
            p.insured_amount,
            p.iva,
            p.emission_rights,
            p.financing_surcharges,
            p.cancellation_date,
            p.validity,
            p.renewal
            FROM [policy] AS p
            JOIN bouquet AS b ON p.id_bouquet=b.id_bouquet
            JOIN bouquet_type AS bt ON p.id_bouquet_type = bt.id_bouquet_type
            JOIN policy_status AS ps ON p.id_policy_status = ps.id_policy_status
            JOIN sib_period AS sb ON p.id_sib_period = sb.id_sib_period
            WHERE p.id_trust = @id;
		COMMIT TRAN
	END TRY 
	BEGIN CATCH
		ROLLBACK TRAN
	END CATCH
END
GO



-- ====================================================================================================

SET ANSI_NULLS ON
GO  
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <06/10/2020>
-- Description:	<PARA MOSTRAR UNA POLIZA POR EL USUARIO DEL SISTEMA>
-- =============================================
CREATE PROCEDURE sp_search_policy_usersystem_single
(@id INTEGER)
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
    		SELECT 
            p.id_policy,
            p.identifier,
            p.id_trust,
            p.id_agent,
            p.id_user,
            p.id_bouquet,
            b.bouquet,
            p.id_bouquet_type,
            bt.bouquet_type,
            p.id_policy_status,
            ps.policy_status,
            p.id_sib_period,
            sb.end_date,
            p.creation_date,
            p.prima,
            p.contract_amount,
            p.insured_amount,
            p.iva,
            p.emission_rights,
            p.financing_surcharges,
            p.cancellation_date,
            p.validity,
            p.renewal
            FROM [policy] AS p
            JOIN bouquet AS b ON p.id_bouquet=b.id_bouquet
            JOIN bouquet_type AS bt ON p.id_bouquet_type = bt.id_bouquet_type
            JOIN policy_status AS ps ON p.id_policy_status = ps.id_policy_status
            JOIN sib_period AS sb ON p.id_sib_period = sb.id_sib_period
            WHERE p.id_user = @id;
		COMMIT TRAN
	END TRY 
	BEGIN CATCH
		ROLLBACK TRAN
	END CATCH
END
GO

-- ====================================================================================================
SET ANSI_NULLS ON
GO  
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <06/10/2020>
-- Description:	<PARA MOSTRAR UNA POLIZA POR EL AGENTE>
-- =============================================
CREATE PROCEDURE sp_search_policy_agent_single
(@id INTEGER)
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
    		SELECT 
            p.id_policy,
            p.identifier,
            p.id_trust,
            p.id_agent,
            p.id_user,
            p.id_bouquet,
            b.bouquet,
            p.id_bouquet_type,
            bt.bouquet_type,
            p.id_policy_status,
            ps.policy_status,
            p.id_sib_period,
            sb.end_date,
            p.creation_date,
            p.prima,
            p.contract_amount,
            p.insured_amount,
            p.iva,
            p.emission_rights,
            p.financing_surcharges,
            p.cancellation_date,
            p.validity,
            p.renewal
            FROM [policy] AS p
            JOIN bouquet AS b ON p.id_bouquet=b.id_bouquet
            JOIN bouquet_type AS bt ON p.id_bouquet_type = bt.id_bouquet_type
            JOIN policy_status AS ps ON p.id_policy_status = ps.id_policy_status
            JOIN sib_period AS sb ON p.id_sib_period = sb.id_sib_period
            WHERE p.id_agent = @id;
		COMMIT TRAN
	END TRY 
	BEGIN CATCH
		ROLLBACK TRAN
	END CATCH
END
GO

-- ====================================================================================================

SET ANSI_NULLS ON
GO  
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <14/10/2020>
-- Description:	<PARA MOSTRAR SI LA POLIZA ESTA EN EMISION>
-- =============================================
CREATE PROCEDURE sp_search_policy_stateEmission
(@id INTEGER)
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
    		SELECT p.id_policy FROM [policy] AS p WHERE p.id_policy_status = 1005 AND p.id_policy= @id;
		COMMIT TRAN
	END TRY 
	BEGIN CATCH
		ROLLBACK TRAN
	END CATCH
END
GO


-- ====================================================================================================

SET ANSI_NULLS ON
GO  
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <06/10/2020>
-- Description:	<PARA MOSTRAR LAS POLIZAS POR ANALISITA>
-- =============================================
CREATE PROCEDURE sp_search_policy_analyst_revision
(@id INTEGER)
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
    		SELECT 
            p.id_policy,
            p.identifier,
            p.id_trust,
            p.id_agent,
            p.id_user,
            p.id_bouquet,
            b.bouquet,
            p.id_bouquet_type,
            bt.bouquet_type,
            p.id_policy_status,
            ps.policy_status,
            p.id_sib_period,
            sb.end_date,
            p.creation_date,
            p.prima,
            p.contract_amount,
            p.insured_amount,
            p.iva,
            p.emission_rights,
            p.financing_surcharges,
            p.cancellation_date,
            p.validity,
            p.renewal
            FROM [policy] AS p
            JOIN bouquet AS b ON p.id_bouquet=b.id_bouquet
            JOIN bouquet_type AS bt ON p.id_bouquet_type = bt.id_bouquet_type
            JOIN policy_status AS ps ON p.id_policy_status = ps.id_policy_status
            JOIN sib_period AS sb ON p.id_sib_period = sb.id_sib_period
			JOIN analyst_assignment AS ans ON p.id_policy = ans.id_policy
			WHERE ans.id_user =@id
		COMMIT TRAN
	END TRY 
	BEGIN CATCH
		ROLLBACK TRAN
	END CATCH
END
GO


-- ====================================================================================================

SET ANSI_NULLS ON
GO  
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <28/10/2020>
-- Description:	<PARA MOSTRAR UNA POLIZA POR ASIGACION DE UN ANALISTA>
-- =============================================
CREATE PROCEDURE sp_search_policy_analyst_revision_single
(@id_user INTEGER,@id_policy INTEGER)
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
    		SELECT 
            p.id_policy,
            p.identifier,
            p.id_trust,
            p.id_agent,
            p.id_user,
            p.id_bouquet,
            b.bouquet,
            p.id_bouquet_type,
            bt.bouquet_type,
            p.id_policy_status,
            ps.policy_status,
            p.id_sib_period,
            sb.end_date,
            p.creation_date,
            p.prima,
            p.contract_amount,
            p.insured_amount,
            p.iva,
            p.emission_rights,
            p.financing_surcharges,
            p.cancellation_date,
            p.validity,
            p.renewal
            FROM [policy] AS p
            JOIN bouquet AS b ON p.id_bouquet=b.id_bouquet
            JOIN bouquet_type AS bt ON p.id_bouquet_type = bt.id_bouquet_type
            JOIN policy_status AS ps ON p.id_policy_status = ps.id_policy_status
            JOIN sib_period AS sb ON p.id_sib_period = sb.id_sib_period
			JOIN analyst_assignment AS ans ON p.id_policy = ans.id_policy
			WHERE ans.id_user =@id_user AND p.id_policy = @id_policy
		COMMIT TRAN
	END TRY 
	BEGIN CATCH
		ROLLBACK TRAN
	END CATCH
END
GO



-- ====================================================================================================
SET ANSI_NULLS ON
GO  
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:      <GERSON RAMOS>
-- Create date: <03/11/2020>
-- Description: <PARA MOSTRAR EL DETALLE DE UNA POLIZA POR EL AGENTE>
-- =============================================
CREATE PROCEDURE sp_search_policy_agent_details_single
(@id_agent INTEGER,@id_policy INTEGER)
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
            SELECT 
            p.id_policy,
            p.identifier,
            p.id_trust,
            p.id_agent,
            p.id_user,
            p.id_bouquet,
            b.bouquet,
            p.id_bouquet_type,
            bt.bouquet_type,
            p.id_policy_status,
            ps.policy_status,
            p.id_sib_period,
            sb.end_date,
            p.creation_date,
            p.prima,
            p.contract_amount,
            p.insured_amount,
            p.iva,
            p.emission_rights,
            p.financing_surcharges,
            p.cancellation_date,
            p.validity,
            p.renewal
            FROM [policy] AS p
            JOIN bouquet AS b ON p.id_bouquet=b.id_bouquet
            JOIN bouquet_type AS bt ON p.id_bouquet_type = bt.id_bouquet_type
            JOIN policy_status AS ps ON p.id_policy_status = ps.id_policy_status
            JOIN sib_period AS sb ON p.id_sib_period = sb.id_sib_period
            WHERE p.id_agent = @id_agent AND p.id_policy=@id_policy;
        COMMIT TRAN
    END TRY 
    BEGIN CATCH
        ROLLBACK TRAN
    END CATCH
END
GO