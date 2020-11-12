-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE USUARIO DEL SISTEMA>
-- =============================================
CREATE PROCEDURE sp_create_usersystem
(@id_person INTEGER,@username VARCHAR(64),@password VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO usersystem (id_person,username,[password]) VALUES (@id_person,@username,@password)
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
-- Description:	<PARA DESAHILITAR O ACTIVAR UN REGISTRO DE UN USUARIO DEL SISTEMA>
-- =============================================
CREATE PROCEDURE sp_delete_usersystem
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
           DECLARE @disabled BIT = (SELECT [disabled] FROM usersystem WHERE id_user = @id)
           DECLARE @newDisabled BIT;
            IF @disabled = 0
                BEGIN
                SET @newDisabled = 1;
                END
            ELSE
                BEGIN
                 SET @newDisabled = 0;
                END

			UPDATE usersystem SET [disabled]=@newDisabled WHERE id_user = @id
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
-- Create date: <03/09/2020>
-- Description:	<MOSTRAR LOS DATOS DE LOS USUARIOS DEL SISTEMA>
-- =============================================
CREATE PROCEDURE sp_search_usersystem
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
          SELECT 
			us.id_user,
			r.rol,
			us.username,
			p.id_person,
			d.department,
			m.municipality,
			p.nit,
			p.cui,
			p.first_name,
			p.second_name,
			p.first_surname,
			p.second_surname,
			p.date_of_birth,
			p.email,
			p.avatar,
			p.sexo,
			us.[disabled]
			FROM person AS p 
			LEFT JOIN rol AS r ON p.id_rol=r.id_rol
			LEFT JOIN municipality AS m ON p.id_municipality= m.id_municipality
			LEFT JOIN department AS d ON d.id_department=m.id_department
			LEFT JOIN type_person AS tp ON p.id_type_person=tp.id_type_person
			LEFT JOIN comercial_activity AS  ca ON p.id_comercial_activity = ca.id_comercial_activity
			JOIN usersystem AS us ON p.id_person= us.id_person
			WHERE us.id_user IS NOT NULL
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
-- Create date: <06/09/2020>
-- Description:	<MOSTRAR LOS DATOS DE UN USUARIO SISTEMA>
-- =============================================
CREATE PROCEDURE sp_search_usersystemsingle
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
          SELECT 
			us.id_user,
			r.rol,
			us.username,
			p.id_person,
			d.department,
			m.municipality,
			p.nit,
			p.cui,
			p.first_name,
			p.second_name,
			p.first_surname,
			p.second_surname,
			p.date_of_birth,
			p.email,
			p.avatar,
			p.sexo,
			us.[disabled]
			FROM person AS p 
			LEFT JOIN rol AS r ON p.id_rol=r.id_rol
			LEFT JOIN municipality AS m ON p.id_municipality= m.id_municipality
			LEFT JOIN department AS d ON d.id_department=m.id_department
			LEFT JOIN type_person AS tp ON p.id_type_person=tp.id_type_person
			LEFT JOIN comercial_activity AS  ca ON p.id_comercial_activity = ca.id_comercial_activity
			JOIN usersystem AS us ON p.id_person= us.id_person
			WHERE us.id_user =@id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO

