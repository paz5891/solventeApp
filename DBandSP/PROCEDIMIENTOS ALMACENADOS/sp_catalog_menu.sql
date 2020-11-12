-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE MENU>
-- =============================================
CREATE PROCEDURE sp_create_menu_catalog
(@menu VARCHAR(64))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO catalog_menu (menu) VALUES (@menu)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS MENU>
-- =============================================
CREATE PROCEDURE sp_search_menu_catalog
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_menu,menu FROM catalog_menu;
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
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN MENU>
-- =============================================
CREATE PROCEDURE sp_delete_catalog_menu
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM catalog_menu WHERE id_menu = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN MENU>
-- =============================================
CREATE PROCEDURE sp_update_catalog_menu
(@id INTEGER,@menu VARCHAR(64))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE catalog_menu SET menu=@menu WHERE id_menu = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO
