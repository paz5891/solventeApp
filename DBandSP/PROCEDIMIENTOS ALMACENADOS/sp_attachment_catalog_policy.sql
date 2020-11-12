-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <05/10/2020>
-- Description:	<PARA CREAR UN REGISTRO DE TIPO DE ADJUNTO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_create_attachment_catalog_policy
(@attachment_catalog_policy VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO attachment_catalog_policy (attachment_catalog_policy) VALUES (@attachment_catalog_policy)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS ADJUNTO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_search_attachment_catalog_policy
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_attachment_catalog_policy,attachment_catalog_policy FROM attachment_catalog_policy;
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
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN ADJUNTO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_delete_attachment_catalog_policy
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM attachment_catalog_policy WHERE id_attachment_catalog_policy = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN ADJUNTO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_update_attachment_catalog_policy
(@id INTEGER,@attachment_catalog_policy VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE attachment_catalog_policy SET attachment_catalog_policy=@attachment_catalog_policy WHERE id_attachment_catalog_policy = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO
