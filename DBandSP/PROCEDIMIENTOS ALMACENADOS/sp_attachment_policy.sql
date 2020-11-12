-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Author:		<GERSON RAMOS>
-- Create date: <05/10/2020>
-- Description:	<PARA CREAR UN REGISTRO DE UNA ADJUNTO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_create_attachment_policy
(@id_policy INTEGER,@id_attachment_catalog_policy INTEGER,@attachment VARCHAR(MAX),@description VARCHAR(MAX))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO [attachment_policy] (id_policy,id_attachment_catalog_policy,attachment,[description],[creation_date]) VALUES (@id_policy,@id_attachment_catalog_policy,@attachment,@description,GETDATE())
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
CREATE PROCEDURE sp_search_attachment_policy
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
            SELECT 
            p.id_policy,
            ap.id_attachment_policy,
            ap.attachment,
            ap.[description],
            ap.creation_date,
            [acp].id_attachment_catalog_policy,
            [acp].attachment_catalog_policy,
			ap.[check]
            FROM attachment_policy AS ap 
            JOIN [policy] AS p ON ap.id_policy= p.id_policy
            JOIN attachment_catalog_policy AS [acp] ON ap.id_attachment_catalog_policy=[acp].id_attachment_catalog_policy
            WHERE p.id_policy = @id
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
CREATE PROCEDURE sp_delete_attachment_policy
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM [attachment_policy] WHERE id_attachment_policy = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN ADJUNTO>
-- =============================================
CREATE PROCEDURE sp_update_attachment_policy
(@id INTEGER, @id_policy INTEGER,@id_attachment_catalog_policy INTEGER,@attachment VARCHAR(MAX),@description VARCHAR(MAX))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE [attachment_policy] SET id_policy=@id_policy,@id_attachment_catalog_policy=@id_attachment_catalog_policy,attachment=@attachment, [description]=@description WHERE id_attachment_policy = @id
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
-- Create date: <29/08/2020>
-- Description:	<PARA MARCAR QUE UN ADJUNTO YA FUE REVISADO>
-- =============================================
CREATE PROCEDURE sp_revisioncheck_attachment_policy
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
           DECLARE @disabled BIT = (SELECT [check] FROM [attachment_policy] WHERE id_attachment_policy = @id)
           DECLARE @newDisabled BIT;
            IF @disabled = 0
                BEGIN
                SET @newDisabled = 1;
                END
            ELSE
                BEGIN
                 SET @newDisabled = 0;
                END

			UPDATE [attachment_policy] SET [check]=@newDisabled WHERE id_attachment_policy = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO
