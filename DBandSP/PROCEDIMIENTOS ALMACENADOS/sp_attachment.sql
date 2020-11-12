-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE UNA ADJUNTO>
-- =============================================
CREATE PROCEDURE sp_create_attachment
(@id_person INTEGER,@id_attachment_catalog INTEGER,@attachment VARCHAR(128),@description VARCHAR(MAX))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO [attachment] (id_person,id_attachment_catalog,attachment,[description],[date]) VALUES (@id_person,@id_attachment_catalog,@attachment,@description,GETDATE())
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
CREATE PROCEDURE sp_search_attachment
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
            SELECT a.id_attachment_person,a.description,a.attachment,ac.attachment AS type_attachment FROM person AS p 
            JOIN attachment AS a ON p.id_person=a.id_person
            JOIN attachment_catalog AS ac ON a.id_attachment_catalog=ac.id_attachment_catalog
            WHERE p.id_person= @id
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
CREATE PROCEDURE sp_delete_attachment
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM [attachment] WHERE id_attachment_person = @id
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
CREATE PROCEDURE sp_update_attachment
(@id INTEGER, @id_person INTEGER,@id_attachment_catalog INTEGER,@attachment VARCHAR(128),@description VARCHAR(MAX))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE [attachment] SET id_person=@id_person,@id_attachment_catalog=@id_attachment_catalog,attachment=@attachment, [description]=@description WHERE id_attachment_person = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO