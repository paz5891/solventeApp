-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <05/10/2020>
-- Description:	<PARA CREAR UN REGISTRO DE TIPO DE RAMO>
-- =============================================
CREATE PROCEDURE sp_create_bouquet_type
(@id_bouquet INTEGER , @bouquet_type VARCHAR(64))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO bouquet_type (id_bouquet,bouquet_type) VALUES (@id_bouquet, @bouquet_type)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS TIPOS DE RAM>
-- =============================================
CREATE PROCEDURE sp_search_bouquet_type
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_bouquet_type,id_bouquet,bouquet_type FROM bouquet_type WHERE id_bouquet=@id;
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
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN TIPO DE RAMO >
-- =============================================
CREATE PROCEDURE sp_delete_bouquet_type
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM bouquet_type WHERE id_bouquet_type = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN TIPO DE RAMO>
-- =============================================
CREATE PROCEDURE sp_update_bouquet_type
(@id INTEGER, @id_bouquet INTEGER , @bouquet_type VARCHAR(64))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE bouquet_type SET id_bouquet=@id_bouquet, bouquet_type=@bouquet_type WHERE id_bouquet_type = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO
