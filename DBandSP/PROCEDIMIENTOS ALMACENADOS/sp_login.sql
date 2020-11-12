
-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <30/08/2020>
-- Description:	<PARA Realizar el inicio de sesion de un administrador>
-- =============================================
CREATE PROCEDURE sp_create_login_admin
(@username VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT 
                us.id_user,
                us.username,
                us.[password],
                p.first_name,
                p.second_name,
                p.first_surname,
                p.second_surname
                FROM usersystem AS us
                INNER JOIN person AS p ON us.id_person=p.id_person
                WHERE p.id_rol = 1000 AND us.username=@username
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
-- Create date: <30/08/2020>
-- Description:	<PARA Realizar el inicio de sesion de un analista>
-- =============================================
CREATE PROCEDURE sp_create_login_analyst
(@username VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT 
                us.id_user,
                us.username,
                us.[password],
                p.first_name,
                p.second_name,
                p.first_surname,
                p.second_surname
                FROM usersystem AS us
                INNER JOIN person AS p ON us.id_person=p.id_person
                WHERE p.id_rol = 1001 AND us.username=@username
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
-- Create date: <30/08/2020>
-- Description:	<PARA Realizar el inicio de sesion de un agente>
-- =============================================
CREATE PROCEDURE sp_create_login_agent
(@username VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			    SELECT 
				a.id_agent,
                us.id_user,
                us.username,
                us.[password],
                p.first_name,
                p.second_name,
                p.first_surname,
                p.second_surname
                FROM usersystem AS us
                INNER JOIN person AS p ON us.id_person=p.id_person
				INNER JOIN agent AS a ON p.id_person = a.id_person
                WHERE p.id_rol = 1002 AND us.username=@username
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
-- Create date: <30/08/2020>
-- Description:	<PARA Realizar el inicio de sesion de un cobrador>
-- =============================================
CREATE PROCEDURE sp_create_login_debt_collector
(@username VARCHAR(128))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT 
                us.id_user,
                us.username,
                us.[password],
                p.first_name,
                p.second_name,
                p.first_surname,
                p.second_surname
                FROM usersystem AS us
                INNER JOIN person AS p ON us.id_person=p.id_person
                WHERE p.id_rol = 1003 AND us.username=@username
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO