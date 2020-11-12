-- ====================================================================================================

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <16/10/2020>
-- Description:	<PARA PARA CREAR LOS REQUERIMINETOS DE PAGO>
-- =============================================
CREATE PROCEDURE sp_create_payment_requirements
(@id_policy INTEGER,@id_user_creator_requirement INTEGER ,@date_of_first_payment DATE,@validity INTEGER,@prima DECIMAL(10,2))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
            DECLARE @correlative INTEGER = 1;
            DECLARE @request_date DATETIME = GETDATE();

            -- PORCANTEJES TEMPORALES
            DECLARE @iva_percentage DECIMAL(10,2)= 0.12;
            DECLARE @emission_rights_percentage DECIMAL(10,2)= 0.05;
            DECLARE @surcharge_percentage DECIMAL(10,2)= 0.10;

            DECLARE @prima_TMP DECIMAL(10,2) = @prima/@validity;
            
            DECLARE @iva DECIMAL(10,2) = @prima_TMP*@iva_percentage;
            DECLARE @emission_rights DECIMAL(10,2) = @prima_TMP*@emission_rights_percentage;
            DECLARE @surcharge DECIMAL(10,2) = @prima_TMP*@surcharge_percentage;

            SET @prima_TMP= @prima_TMP-@iva;
            DECLARE @date_of_first_payment_tmp DATE = @date_of_first_payment;

            WHILE @correlative<=@validity
            BEGIN 
                INSERT INTO payment_requirements (correlative,id_requirement_status,id_policy,id_user_creator_requirement,request_date,expiration_date,prima_pending_payment,iva,emission_rights,surcharge)
                VALUES (@correlative,1000,@id_policy,@id_user_creator_requirement,@request_date,@date_of_first_payment_tmp, @prima_TMP,@iva,@emission_rights,@surcharge)
                SET @date_of_first_payment_tmp = DATEADD(MONTH,1,@date_of_first_payment_tmp);
                SET @correlative = @correlative+1;
            END
            UPDATE [policy] SET id_policy_status = 1004 WHERE id_policy = @id_policy;
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
-- Create date: <16/10/2020>
-- Description:	<PARA ANULAR  UN REQUERIMIENTO DE PAGO>
-- =============================================
CREATE PROCEDURE sp_delete_payment_requirements
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
            UPDATE payment_requirements SET id_requirement_status= 1002 WHERE id_payment_requirements=@id;
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
-- Create date: <16/10/2020>
-- Description:	<PARA BUSCAR UN REQUERIMIENTOS DE PAGO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_search_payment_requirements
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
                SELECT 
                pr.id_payment_requirements,
                pr.correlative,
                pr.id_policy,
                pr.id_requirement_status,
                rs.requirement_status,
                pr.id_user_creator_requirement,
                CONCAT(p1.first_name,',',p1.second_name,',',p1.first_surname,',',p1.second_surname) AS user_creator_requirement,
                pr.id_user_payment_requirements,
                CONCAT(p2.first_name,',',p2.second_name,',',p2.first_surname,',',p2.second_surname) AS user_payment_requirements,
                pr.request_date,
                pr.expiration_date,
                pr.prima_pending_payment,
                pr.iva,
                pr.emission_rights,
                pr.surcharge
                FROM payment_requirements AS pr
                JOIN requirement_status AS rs ON pr.id_requirement_status=rs.id_requirement_status
                JOIN usersystem AS us1 ON us1.id_user= pr.id_user_creator_requirement
                JOIN person AS p1 ON p1.id_person= us1.id_person
                LEFT JOIN usersystem AS us2 ON us2.id_user= pr.id_user_payment_requirements
                LEFT JOIN person AS p2 ON p2.id_person= us2.id_person
                WHERE pr.id_policy=@id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO