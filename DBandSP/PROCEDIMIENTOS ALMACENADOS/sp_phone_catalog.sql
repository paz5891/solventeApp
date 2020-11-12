-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE TIPO DE TELEFONO>
-- =============================================
CREATE PROCEDURE sp_create_phone_catalog
(@type_phone VARCHAR(64))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO phone_catalog (type_phone) VALUES (@type_phone)
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
-- Description:	<PARA BUSCAR LOS TIPOS DE TELEFONO>
-- =============================================
CREATE PROCEDURE sp_search_phone_catalog
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_phone_catalog,type_phone FROM phone_catalog;
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
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN TIPO DE TELEFONO>
-- =============================================
CREATE PROCEDURE sp_delete_phone_catalog
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM phone_catalog WHERE id_phone_catalog = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN TIPO DE TELEFONO>
-- =============================================
CREATE PROCEDURE sp_update_phone_catalog
(@id INTEGER,@type_phone VARCHAR(64))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE phone_catalog SET type_phone=@type_phone WHERE id_phone_catalog = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO
