-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE TIPO DE ADJUNTO>
-- =============================================
CREATE PROCEDURE sp_create_attachment_catalog
(@attachment_catalog VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO attachment_catalog (attachment) VALUES (@attachment_catalog)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS ADJUNTO>
-- =============================================
CREATE PROCEDURE sp_search_attachment_catalog
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_attachment_catalog,attachment FROM attachment_catalog;
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
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN ADJUNTO>
-- =============================================
CREATE PROCEDURE sp_delete_attachment_catalog
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM attachment_catalog WHERE id_attachment_catalog = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN ADJUNTO>
-- =============================================
CREATE PROCEDURE sp_update_attachment_catalog
(@id INTEGER,@attachment_catalog VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE attachment_catalog SET attachment=@attachment_catalog WHERE id_attachment_catalog = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO
