-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE ACTIVIDAD COMERCIAL>
-- =============================================
CREATE PROCEDURE sp_create_comercial_activity
(@comercial_activity VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO comercial_activity (comercial_activity) VALUES (@comercial_activity)
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
-- Create date: <23/08/2020>
-- Description:	<PARA BUSCAR LOS REGISTRO DE LAS ACTIVIDAD COMERCIAL>
-- =============================================
CREATE PROCEDURE sp_search_comercial_activity
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_comercial_activity,comercial_activity FROM comercial_activity;
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
-- Create date: <23/08/2020>
-- Description:	<PARA ELIMINAR UN REGISTRO DE UNA ACTIVIDAD COMERCIAL>
-- =============================================
CREATE PROCEDURE sp_delete_comercial_activity
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM comercial_activity WHERE id_comercial_activity = @id
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
-- Create date: <23/08/2020>
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UNA ACTIVIDAD COMERCIAL>
-- =============================================
CREATE PROCEDURE sp_update_comercial_activity
(@id INTEGER,@comercial_activity VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE comercial_activity SET comercial_activity=@comercial_activity WHERE id_comercial_activity = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO
