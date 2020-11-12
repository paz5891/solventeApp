-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <16/10/2020>
-- Description:	<PARA CREAR UN REGISTRO DE UN PAGO DE UN REQUERIMIENTO>
-- =============================================
CREATE PROCEDURE sp_create_payment
(@id_payment_requirements INTEGER,@id_type_payments INTEGER,@id_user_payments INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
            DECLARE @prima_pending_payment DECIMAL(10,2)
            DECLARE @iva DECIMAL(10,2)
            DECLARE @emission_rights DECIMAL(10,2)
            DECLARE @surcharge DECIMAL(10,2)
            DECLARE @payment_date DATETIME = GETDATE();
            DECLARE @valitdationdate DATE = GETDATE();
            DECLARE @amount DECIMAL(10,2);
            DECLARE @expiration_date DATE;

            DECLARE @id_payment_status INTEGER;

            SELECT 
            @prima_pending_payment=prima_pending_payment,
            @iva=iva,
            @emission_rights=emission_rights,
            @surcharge=surcharge,
            @expiration_date=expiration_date
            FROM payment_requirements
            WHERE id_payment_requirements= @id_payment_requirements;

            SET @amount = @prima_pending_payment+@iva+@emission_rights+@surcharge;
                
            IF @expiration_date <= @valitdationdate
            BEGIN 
                SET @id_payment_status = 1000;
            END
            ELSE 
            BEGIN
                SET @id_payment_status = 1001;
            END
            INSERT INTO payments (id_payment_requirements,id_type_payments,id_payment_status,id_user_payments,amount,payment_date)
            VALUES (@id_payment_requirements,@id_type_payments,@id_payment_status,@id_user_payments,@amount,@payment_date)

            UPDATE payment_requirements SET  id_requirement_status = 1001 WHERE id_payment_requirements =@id_payment_requirements;
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
-- Description:	<PARA ANULAR UN PAGO DE UN REQUERIMIENTO>
-- =============================================
CREATE PROCEDURE sp_delete_payment
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
            UPDATE payments SET id_payment_status= 1002 WHERE id_payments=@id;
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
-- Description:	<PARA MOSTRAR LOS PAGOS QUE SE HAN REALIZADO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_search_payment_paid
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
            SELECT 
            pr.id_policy,
            p.id_payments,
            p.id_payment_requirements,
            pr.prima_pending_payment,
            pr.iva,
            pr.emission_rights,
            pr.surcharge,
            pr.expiration_date,
            p.id_type_payments,
            tp.id_type_payments,
            p.id_payment_status,
            ps.payment_status,
            p.id_user_payments,
            CONCAT(pe.first_name,',',pe.second_name,',',pe.first_surname,',',pe.second_surname) AS user_payments,
            p.amount,
            p.payment_date
            FROM payments AS p 
            JOIN type_payments AS tp ON p.id_type_payments = tp.id_type_payments
            JOIN payment_requirements AS pr ON p.id_payment_requirements=pr.id_payment_requirements
            JOIN payment_status AS ps ON p.id_payment_status= ps.id_payment_status
            JOIN usersystem AS us ON p.id_user_payments = us.id_user
            JOIN person AS pe ON us.id_person = pe.id_person
            WHERE pr.id_policy = @id;
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
-- Description:	<PARA MOSTRAR TODOS LOS PAGOS QUE HACEN FALTA>
-- =============================================
CREATE PROCEDURE sp_search_payment_pending_payments
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
           SELECT 
            pr.id_policy,
            p.id_payments,
            p.id_payment_requirements,
            pr.prima_pending_payment,
            pr.iva,
            pr.emission_rights,
            pr.surcharge,
            pr.expiration_date,
            p.id_type_payments,
            tp.id_type_payments,
            p.id_payment_status,
            ps.payment_status,
            p.id_user_payments,
            CONCAT(pe.first_name,',',pe.second_name,',',pe.first_surname,',',pe.second_surname) AS user_payments,
            p.amount,
            p.payment_date
            FROM payments AS p 
            JOIN type_payments AS tp ON p.id_type_payments = tp.id_type_payments
            LEFT JOIN payment_requirements AS pr ON p.id_payment_requirements=pr.id_payment_requirements
            JOIN payment_status AS ps ON p.id_payment_status= ps.id_payment_status
            JOIN usersystem AS us ON p.id_user_payments = us.id_user
            JOIN person AS pe ON us.id_person = pe.id_person
            WHERE pr.id_policy = @id AND p.id_payments IS NULL;
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
-- Description:	<PARA MOSTRAR EL ESTADO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_search_payment_policy_status
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY           
            SELECT 
            pr.id_policy,
            p.id_payments,
            p.id_payment_requirements,
            pr.prima_pending_payment,
            pr.iva,
            pr.emission_rights,
            pr.surcharge,
            pr.expiration_date,
            p.id_type_payments,
            tp.id_type_payments,
            p.id_payment_status,
            ps.payment_status,
            p.id_user_payments,
            CONCAT(pe.first_name,',',pe.second_name,',',pe.first_surname,',',pe.second_surname) AS user_payments,
            p.amount,
            p.payment_date
            FROM payments AS p 
            JOIN type_payments AS tp ON p.id_type_payments = tp.id_type_payments
            LEFT JOIN payment_requirements AS pr ON p.id_payment_requirements=pr.id_payment_requirements
            JOIN payment_status AS ps ON p.id_payment_status= ps.id_payment_status
            JOIN usersystem AS us ON p.id_user_payments = us.id_user
            JOIN person AS pe ON us.id_person = pe.id_person
            WHERE pr.id_policy = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO