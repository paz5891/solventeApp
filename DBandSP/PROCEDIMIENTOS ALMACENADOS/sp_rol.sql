-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE ROL>
-- =============================================
CREATE PROCEDURE sp_create_rol
(@rol VARCHAR(64))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO rol (rol) VALUES (@rol)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS ROL>
-- =============================================
CREATE PROCEDURE sp_search_rol
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_rol,rol FROM rol;
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
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN ROL>
-- =============================================
CREATE PROCEDURE sp_delete_rol
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM rol WHERE id_rol = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN ROL>
-- =============================================
CREATE PROCEDURE sp_update_rol
(@id INTEGER,@rol VARCHAR(64))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE rol SET rol=@rol WHERE id_rol = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO
