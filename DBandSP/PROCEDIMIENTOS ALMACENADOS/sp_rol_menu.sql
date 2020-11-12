-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE ROL MENU>
-- =============================================
CREATE PROCEDURE sp_create_rol_menu
(@id_menu INTEGER,@id_rol INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO rol_menu (id_menu,id_rol) VALUES (@id_menu,@id_rol)
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN ROL MENU>
-- =============================================
CREATE PROCEDURE sp_delete_rol_menu
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM rol_menu WHERE id_rol_menu = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN ROL MENU>
-- =============================================
CREATE PROCEDURE sp_update_rol_menu
(@id INTEGER,@id_menu INTEGER,@id_rol INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE rol_menu SET id_menu=@id_menu, id_rol=@id_rol WHERE id_rol_menu = @id
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
-- Create date: <24/08/2020>
-- Description:	<BUSQUEDA PARA DE LAS ASIGANCIONES DE LOS MENUS A ROLES EN GENERAL>
-- =============================================
CREATE PROCEDURE sp_search_rol_menu
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			 SELECT rm.id_rol_menu,r.id_rol,cm.id_menu,cm.menu,r.rol 
			 FROM rol AS r 
			 JOIN rol_menu as rm ON r.id_rol = rm.id_rol
			 JOIN catalog_menu AS cm ON rm.id_menu= cm.id_menu
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
-- Description:	<BUSQUEDA PARA SABER CUAL MENUS SON PERMITIDOS PARA CADA ROL>
-- =============================================
CREATE PROCEDURE sp_search_matrix_menus
(@id_rol INTEGER, @id_person INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
            SELECT cm.id_menu,cm.menu FROM person AS p 
            JOIN rol AS r ON p.id_rol = r.id_rol
            JOIN rol_menu as rm ON r.id_rol = rm.id_rol
            JOIN catalog_menu AS cm ON rm.id_menu= cm.id_menu
            WHERE r.id_rol = @id_rol AND p.id_person = @id_person AND p.id_rol = @id_rol
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO

