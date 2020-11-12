-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <05/10/2020>
-- Description:	<PARA CREAR UN REGISTRO DE ASIGNACION DE UN ANALISTA A UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_create_analyst_assignment
(@id_policy INTEGER,@id_user INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE [policy] SET id_policy_status = 1001 WHERE id_policy = @id_policy
			INSERT INTO [analyst_assignment] (id_policy,id_user,[status]) VALUES (@id_policy,@id_user,'NEW')
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
-- Create date: <05/10/2020>
-- Description:	<PARA BUSCAR LOS REGISTRO DE LAS ASIGNACIONES DE LAS POLIZAS A ANALISTAS>
-- =============================================
CREATE PROCEDURE sp_search_analyst_assignment_all
AS
BEGIN
	BEGIN TRAN  
		BEGIN TRY
		    SELECT 
            aa.id_analyst_assignment,
            aa.id_policy,
            aa.id_user,
            p.first_name,
            p.second_name,
            p.first_surname,
            p.second_surname,
            aa.[status]
            FROM analyst_assignment AS aa 
            JOIN usersystem AS us ON aa.id_user= us.id_user
            JOIN person AS p ON us.id_person= p.id_person	

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
-- Create date: <05/10/2020>
-- Description:	<PARA BUSCAR LOS REGISTRO DE UNA DE LAS ASIGNACIONES DE LAS POLIZAS A ANALISTAS>
-- =============================================
CREATE PROCEDURE sp_search_analyst_assignment_single
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN  
		BEGIN TRY
           SELECT 
            aa.id_analyst_assignment,
            aa.id_policy,
            aa.id_user,
            p.first_name,
            p.second_name,
            p.first_surname,
            p.second_surname,
            aa.[status]
            FROM analyst_assignment AS aa 
            JOIN usersystem AS us ON aa.id_user= us.id_user
            JOIN person AS p ON us.id_person= p.id_person
            WHERE aa.id_policy= @id

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
-- Create date: <05/10/2020>
-- Description:	<PARA BUSCAR LOS REGISTRO DE UNA DE LAS ASIGNACIONES DE LAS POLIZAS A ANALISTAS>
-- =============================================
CREATE PROCEDURE sp_search_analyst_assignment_single_usersystem
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN  
		BEGIN TRY
           SELECT 
            aa.id_analyst_assignment,
            aa.id_policy,
            aa.id_user,
            p.first_name,
            p.second_name,
            p.first_surname,
            p.second_surname,
            aa.[status]
            FROM analyst_assignment AS aa 
            JOIN usersystem AS us ON aa.id_user= us.id_user
            JOIN person AS p ON us.id_person= p.id_person
            WHERE us.id_user = @id
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
-- Create date: <05/10/2020>
-- Description:	<PARA ELIMINAR UN REGISTRO DE LAS ASIGNACIONES DE LAS POLIZAS >
-- =============================================
CREATE PROCEDURE sp_delete_analyst_assignment
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM [analyst_assignment] WHERE id_analyst_assignment = @id
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
-- Create date: <05/10/2020>
-- Description:	<PARA ACTUALIZAR UN REGISTRO DE LA ASIGNACIONES DE LAS ANALISTAS Y UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_update_analyst_assignment
(@id INTEGER, @status VARCHAR(32),@id_user INTEGER, @id_policy INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE [analyst_assignment] SET [status]=@status,id_user=@id_user,id_policy=@id_user WHERE id_analyst_assignment = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO