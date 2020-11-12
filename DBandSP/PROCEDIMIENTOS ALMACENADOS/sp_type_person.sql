-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE TIPO DE PERSONA>
-- =============================================
CREATE PROCEDURE sp_create_type_person
(@type_person VARCHAR(64))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO type_person (type_person,DW) VALUES (@type_person,'0')
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS TIPOS DE PERSONA>
-- =============================================
CREATE PROCEDURE sp_search_type_person
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT id_type_person,type_person FROM type_person;
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
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN TIPO DE PERSONA>
-- =============================================
CREATE PROCEDURE sp_delete_type_person
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM type_person WHERE id_type_person = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN TIPO DE PERSONA>
-- =============================================
CREATE PROCEDURE sp_update_type_person
(@id INTEGER,@type_person VARCHAR(64))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE type_person SET type_person=@type_person WHERE id_type_person = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO
