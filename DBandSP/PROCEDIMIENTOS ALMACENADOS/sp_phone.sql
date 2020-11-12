-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE UNA TELEFONO>
-- =============================================
CREATE PROCEDURE sp_create_phone
(@id_person INTEGER,@id_phone_catalog INTEGER,@phone VARCHAR(16))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO [phone] (id_person,id_phone_catalog,[phone]) VALUES (@id_person,@id_phone_catalog,@phone)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS TELEFONO>
-- =============================================
CREATE PROCEDURE sp_search_phone
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
           SELECT a.id_phone,a.phone,ac.type_phone FROM person AS p JOIN [phone] AS a ON p.id_person=a.id_person
            JOIN phone_catalog AS ac ON a.id_phone_catalog=ac.id_phone_catalog
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
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN TELEFONO>
-- =============================================
CREATE PROCEDURE sp_delete_phone
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM [phone] WHERE id_phone = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN TELEFONO>
-- =============================================
CREATE PROCEDURE sp_update_phone
(@id INTEGER,@id_person INTEGER,@id_phone_catalog INTEGER,@phone VARCHAR(16))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE [phone] SET id_person=@id_person,@id_phone_catalog=@id_phone_catalog,[phone]=@phone WHERE id_phone = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO