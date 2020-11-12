-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <16/10/2020>
-- Description:	<PARA CREAR UN REGISTRO DE UN ESTADO DE UN PAGOS>
-- =============================================
CREATE PROCEDURE sp_create_payment_status
(@payment_status VARCHAR(32))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO payment_status (payment_status) VALUES (@payment_status)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS ESTADO DE UN PAGOS>
-- =============================================
CREATE PROCEDURE sp_search_payment_status
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_payment_status,payment_status FROM payment_status;
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
-- Description:	<PARA ELIMINAR UN REGISTRO UN ESTADO DE UN PAGOS>
-- =============================================
CREATE PROCEDURE sp_delete_payment_status
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM payment_status WHERE id_payment_status = @id
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
-- Description:	<PARA ACTUALIZAR  UN ESTADO DE UN PAGOS>
-- =============================================
CREATE PROCEDURE sp_update_payment_status
(@id INTEGER, @payment_status VARCHAR(32))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE payment_status SET payment_status=@payment_status WHERE id_payment_status = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO