-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE UNA DIRECCION>.
-- =============================================
CREATE PROCEDURE sp_create_address
(@id_person INTEGER,@id_address_catalog INTEGER,@address VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO [address] (id_person,id_address_catalog,[address]) VALUES (@id_person,@id_address_catalog,@address)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS DIRECCIONES>
-- =============================================
CREATE PROCEDURE sp_search_address
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
            SELECT p.id_person,a.id_address,a.address,ac.type_address FROM person AS p JOIN [address] AS a ON p.id_person=a.id_person
            JOIN address_catalog AS ac ON a.id_address_catalog=ac.id_address_catalog
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
-- Description:	<PARA ELIMINAR UN REGISTRO DE UN DIRECCION>
-- =============================================
CREATE PROCEDURE sp_delete_address
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM [address] WHERE id_address = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN DIRECCION>
-- =============================================
CREATE PROCEDURE sp_update_address
(@id INTEGER,@id_person INTEGER,@id_address_catalog INTEGER,@address VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE [address] SET id_person=@id_person,@id_address_catalog=@id_address_catalog,[address]=@address WHERE id_address = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO