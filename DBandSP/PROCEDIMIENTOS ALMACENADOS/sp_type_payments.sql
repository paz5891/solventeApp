-- ====================================================================================================

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <16/10/2020>
-- Description:	<PARA CREAR UN REGISTRO DE UN TIPO DE PAGO>
-- =============================================
CREATE PROCEDURE sp_create_type_payments
(@type_payments VARCHAR(32))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO type_payments (type_payments) VALUES (@type_payments)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS TIPO DE PAGO>
-- =============================================
CREATE PROCEDURE sp_search_type_payments
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_type_payments,type_payments FROM type_payments;
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
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN TIPO DE PAGO>
-- =============================================
CREATE PROCEDURE sp_delete_type_payments
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM type_payments WHERE id_type_payments = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN TIPO DE PAGO>
-- =============================================
CREATE PROCEDURE sp_update_type_payments
(@id INTEGER, @type_payments VARCHAR(32))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE type_payments SET type_payments=@type_payments WHERE id_type_payments = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO