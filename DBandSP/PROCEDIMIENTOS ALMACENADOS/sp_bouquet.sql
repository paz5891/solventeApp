-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <05/10/2020>
-- Description:	<PARA CREAR UN REGISTRO DE UN RAMO>
-- =============================================
CREATE PROCEDURE sp_create_bouquet
(@bouquet VARCHAR(32))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO bouquet (bouquet) VALUES (@bouquet)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS RAMOS>
-- =============================================
CREATE PROCEDURE sp_search_bouquet
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_bouquet,bouquet FROM bouquet;
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
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN RAMO >
-- =============================================
CREATE PROCEDURE sp_delete_bouquet
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM bouquet WHERE id_bouquet = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN RAMO>
-- =============================================
CREATE PROCEDURE sp_update_bouquet
(@id INTEGER, @bouquet VARCHAR(32))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE bouquet SET bouquet=@bouquet WHERE id_bouquet = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO
