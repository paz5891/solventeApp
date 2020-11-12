-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <05/10/2020>
-- Description:	<PARA CREAR UN REGISTRO DE UN ESTADO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_create_policy_status
(@policy_status VARCHAR(32))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO policy_status (policy_status) VALUES (@policy_status)
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
-- Create date: <05/10/2020>
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS ESTADO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_search_policy_status
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_policy_status,policy_status FROM policy_status;
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
-- Create date: <05/10/2020>
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN ESTADO DE UNA POLIZA >
-- =============================================
CREATE PROCEDURE sp_delete_policy_status
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM policy_status WHERE id_policy_status = @id
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
-- Create date: <05/10/2020>
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE ESTADO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_update_policy_status
(@id INTEGER, @policy_status VARCHAR(32))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE policy_status SET policy_status=@policy_status WHERE id_policy_status = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO