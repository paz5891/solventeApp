-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE COMENTARIO>
-- =============================================
CREATE PROCEDURE sp_create_commentary
(@id_person INTEGER,@commentary VARCHAR(MAX))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO commentary (id_person,commentary,[date]) VALUES (@id_person,@commentary,GETDATE())
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS COMENTARIOS>
-- =============================================
CREATE PROCEDURE sp_search_commentary
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
            IF @id = 0
                BEGIN
                    SELECT
					c.id_commentary, 
                    CASE
                    WHEN p.first_name IS NOT NULL THEN CONCAT(p.first_name,',',p.second_name,',',p.first_surname,',',p.second_surname)
                    ELSE p.business_name END AS nameperson,
                    c.commentary,
                    c.[date]
                    FROM person AS p JOIN commentary AS c ON p.id_person=c.id_person
                END
            ELSE
                BEGIN 
                    SELECT 
					c.id_commentary,
                    CASE
                    WHEN p.first_name IS NOT NULL THEN CONCAT(p.first_name,',',p.second_name,',',p.first_surname,',',p.second_surname)
                    ELSE p.business_name END AS nameperson,
                    c.commentary,
                    c.[date]
                    FROM person AS p JOIN commentary AS c ON p.id_person=c.id_person
                    WHERE p.id_person = @id
                END
			
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
CREATE PROCEDURE sp_delete_commentary
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM commentary WHERE id_commentary = @id
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
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE UN COMENTARIO>
-- =============================================
CREATE PROCEDURE sp_update_commentary
(@id INTEGER,@commentary VARCHAR(MAX))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE commentary SET commentary=@commentary WHERE id_commentary = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO