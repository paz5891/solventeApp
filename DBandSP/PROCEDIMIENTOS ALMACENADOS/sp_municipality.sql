-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE MUNICIPIO>
-- =============================================
CREATE PROCEDURE sp_create_municipality
(@municipality VARCHAR(128),@id_department INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO municipality (id_department,municipality) VALUES (@id_department,@municipality)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS MUNICIPIO>
-- =============================================
CREATE PROCEDURE sp_search_municipality
(@id_department INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_municipality,municipality FROM municipality WHERE id_department=@id_department;
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
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN MUNICIPIO>
-- =============================================
CREATE PROCEDURE sp_delete_municipality
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM municipality WHERE id_municipality = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN MUNICIPIO>
-- =============================================
CREATE PROCEDURE sp_update_municipality
(@id INTEGER,@id_department INTEGER,@municipality VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE municipality SET municipality=@municipality, id_department=@id_department WHERE id_municipality = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO
