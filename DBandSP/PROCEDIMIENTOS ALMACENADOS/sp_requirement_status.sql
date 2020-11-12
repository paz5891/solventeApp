-- ====================================================================================================

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <16/10/2020>
-- Description:	<PARA CREAR UN REGISTRO DE UN ESTADO DE UN REQUERIMIENTO>
-- =============================================
CREATE PROCEDURE sp_create_requirement_status
(@requirement_status VARCHAR(32))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO requirement_status (requirement_status) VALUES (@requirement_status)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS ESTADO DE UN REQUERIMIENTO>
-- =============================================
CREATE PROCEDURE sp_search_requirement_status
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_requirement_status,requirement_status FROM requirement_status;
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
-- Description:	<PARA ELIMINAR UN REGISTRO UN ESTADO DE UN REQUERIMIENTO>
-- =============================================
CREATE PROCEDURE sp_delete_requirement_status
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM requirement_status WHERE id_requirement_status = @id
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
-- Description:	<PARA ACTUALIZAR  UN ESTADO DE UN REQUERIMIENTO>
-- =============================================
CREATE PROCEDURE sp_update_requirement_status
(@id INTEGER, @requirement_status VARCHAR(32))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE requirement_status SET requirement_status=@requirement_status WHERE id_requirement_status = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO