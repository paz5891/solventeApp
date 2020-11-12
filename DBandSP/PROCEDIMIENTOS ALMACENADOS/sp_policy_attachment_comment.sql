-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <28/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE COMENTARIO  DE UN ADJUNTO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_create_commentary_policy_attachment
(@id_policy INTEGER,@id_user INTEGER,@id_attachment_policy INTEGER,@comment VARCHAR(MAX))
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO policy_comment(id_policy,id_user,id_attachment_policy,comment,[creation_date]) VALUES (@id_policy,@id_user,@id_attachment_policy,@comment,GETDATE())
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
-- Create date: <28/08/2020>
-- Description:	<PARA BUSCAR LOS REGISTRO DE LOS COMENTARIOS DE UN ADJUNTO DE UNA POLIZA>
-- =============================================
CREATE PROCEDURE sp_search_commentary_policy_attachment
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
             SELECT 
				pc.id_comment,
				att.id_attachment_policy,
				pc.id_user,
				p.first_name,
				p.second_name,
				p.first_surname,
				p.second_surname,
				pc.comment,
				pc.creation_date,
				pc.[check]
				FROM policy_comment AS pc
				JOIN usersystem AS us ON pc.id_user= us.id_user
				JOIN person AS p ON us.id_person=p.id_person
				JOIN attachment_policy AS att ON pc.id_attachment_policy=att.id_attachment_policy
				WHERE att.id_attachment_policy = @id
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
-- Create date: <28/08/2020>
-- Description:	<PARA CAMBIAR EL ESTADO DE COMENTARIO DE UN ADJUNTO DE LA POLZA>
-- =============================================
CREATE PROCEDURE sp_chagecheck_commentary_policy_attachment
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
           DECLARE @disabled BIT = (SELECT [check] FROM policy_comment WHERE id_comment = @id)
           DECLARE @newDisabled BIT;
            IF @disabled = 0
                BEGIN
                SET @newDisabled = 1;
                END
            ELSE
                BEGIN
                 SET @newDisabled = 0;
                END

			UPDATE policy_comment SET [check]=@newDisabled WHERE id_comment = @id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO
