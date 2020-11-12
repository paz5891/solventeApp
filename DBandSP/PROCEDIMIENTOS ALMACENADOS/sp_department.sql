-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE DEPARAMENTO>
-- =============================================
CREATE PROCEDURE sp_create_department
(@department VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO department (department) VALUES (@department)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS DEPARAMENTOS>
-- =============================================
CREATE PROCEDURE sp_search_department
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_department,department FROM department;
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
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN DEPARAMENTO>
-- =============================================
CREATE PROCEDURE sp_delete_department
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM department WHERE id_department = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN DEPARAMENTO>
-- =============================================
CREATE PROCEDURE sp_update_department
(@id INTEGER,@department VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE department SET department=@department WHERE id_department = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO
