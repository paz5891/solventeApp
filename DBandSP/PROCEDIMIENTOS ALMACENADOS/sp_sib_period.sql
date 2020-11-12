-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <05/10/2020>
-- Description:	<PARA CREAR UN REGISTRO DEL PERIODO DEL SIB>
-- =============================================
CREATE PROCEDURE sp_create_sib_period
(@end_date DATE)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO [sib_period] ([end_date]) VALUES (@end_date)
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
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS PERIODOS DEL SIB>
-- =============================================
CREATE PROCEDURE sp_search_sib_period
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT 
            sp.id_sib_period,
            sp.end_date,
            sp.date_open,
            sp.date_closed,
            sp.id_user_open,
            p1.first_name AS first_name_user_open,
            p1.second_name AS second_name_user_open,
            p1.first_surname AS first_surname_user_open,
            p1.second_surname AS second_surname_user_open,
            sp.id_user_closed,
            p2.first_name AS first_name_user_closed,
            p2.second_name AS second_name_user_closed,
            p2.first_surname AS first_surname_user_closed,
            p2.second_surname AS second_surname_user_closed,
            sp.[disabled]
            FROM sib_period AS sp
            LEFT JOIN usersystem AS usopen ON sp.id_user_open = usopen.id_user
            LEFT JOIN person AS p1 ON  usopen.id_person=p1.id_person
            LEFT JOIN usersystem AS usclosed ON sp.id_user_closed = usclosed.id_user
            LEFT JOIN person AS p2 ON  usclosed.id_person=p2.id_person
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
-- Description:	<PARA ELIMINAR UN REGISTRO DEL PERIODO DEL SIB >
-- =============================================
CREATE PROCEDURE sp_delete_sib_period
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DECLARE @disabled BIT = (SELECT [disabled] FROM sib_period WHERE id_sib_period = @id)
            DECLARE @newDisabled BIT;
            IF @disabled = 0
            BEGIN
                SET @newDisabled = 1;
            END
            ELSE
            BEGIN
                SET @newDisabled = 0;
            END 

			UPDATE sib_period SET [disabled]=@newDisabled WHERE id_sib_period = @id
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
-- Description:	<PARA ABRIR EL PERIODO DEL SIB>
-- =============================================
CREATE PROCEDURE sp_update_sib_period_open
(@id INTEGER, @id_user_open INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
		    UPDATE [sib_period] SET [id_user_open]=@id_user_open,date_open=GETDATE() WHERE id_sib_period = @id
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
-- Description:	<PARA CERRAR EL PERIODO DEL SIB>
-- =============================================
CREATE PROCEDURE sp_update_sib_period_closed
(@id INTEGER, @id_user_closed INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE [sib_period] SET [id_user_closed]=@id_user_closed,date_closed=GETDATE(),[disabled]=1 WHERE id_sib_period = @id
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
-- Description:	<PARA PARA BUSCAR EL PERIODO SI ESTA ABIERTO>
-- =============================================
CREATE PROCEDURE sp_search_sib_period_openorclosed
(@id  INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT [disabled] FROM  sib_period WHERE id_sib_period=@id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO

-- ====================================================================================================