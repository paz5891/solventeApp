-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <23/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE BENEFICIARIO>
-- =============================================
CREATE PROCEDURE sp_create_beneficiary
(@id_person INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO beneficiary (id_person) VALUES (@id_person)
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
-- Description:	<PARA DESAHILITAR O ACTIVAR UN REGISTRO DE UN BENEFICIARIO>
-- =============================================
CREATE PROCEDURE sp_delete_beneficiary
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
          DECLARE  @disabled BIT = (SELECT [disabled] FROM beneficiary WHERE id_beneficiary = @id)
          DECLARE  @newDisabled BIT;
            IF @disabled = 0
                BEGIN
                SET @newDisabled = 1;
                END
            ELSE
                BEGIN
                 SET @newDisabled = 0;
                END

			UPDATE beneficiary SET [disabled]=@newDisabled WHERE id_beneficiary = @id
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
-- Description:	<PARA MOSTRAR LOS DATOS DE LOS BENEFICIARIOS>
-- =============================================
CREATE PROCEDURE sp_search_beneficiary
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT 
			p.id_type_person,
			b.id_beneficiary,
			p.id_person,
			r.rol,
			d.department,
			m.municipality,
			tp.type_person,
			ca.comercial_activity,
			p.nit,
			p.cui,
			p.first_name,
			p.second_name,
			p.first_surname,
			p.second_surname,
			p.date_of_birth,
			p.business_name,
			p.constitution_date,
			p.commercial_patent_number,
			p.email,
			p.avatar,
			p.sexo,
			b.[disabled]
			FROM person AS p 
			LEFT JOIN rol AS r ON p.id_rol=r.id_rol
			LEFT JOIN municipality AS m ON p.id_municipality= m.id_municipality
			LEFT JOIN department AS d ON d.id_department=m.id_department
			LEFT JOIN type_person AS tp ON p.id_type_person=tp.id_type_person
			LEFT JOIN comercial_activity AS  ca ON p.id_comercial_activity = ca.id_comercial_activity
			JOIN beneficiary AS b ON p.id_person=b.id_beneficiary
			WHERE b.id_beneficiary IS NOT NULL
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
-- Description:	<PARA MOSTRAR UN BENEFICIARIO>
-- =============================================
CREATE PROCEDURE sp_searchsingle_beneficiary
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			SELECT 
			b.id_beneficiary,
			p.id_person,
			r.rol,
			d.department,
			m.municipality,
			p.id_type_person,
			tp.type_person,
			ca.comercial_activity,
			p.nit,
			p.cui,
			p.first_name,
			p.second_name,
			p.first_surname,
			p.second_surname,
			p.date_of_birth,
			p.business_name,
			p.constitution_date,
			p.commercial_patent_number,
			p.email,
			p.avatar,
			p.sexo,
			b.[disabled]
			FROM person AS p 
			LEFT JOIN rol AS r ON p.id_rol=r.id_rol
			LEFT JOIN municipality AS m ON p.id_municipality= m.id_municipality
			LEFT JOIN department AS d ON d.id_department=m.id_department
			LEFT JOIN type_person AS tp ON p.id_type_person=tp.id_type_person
			LEFT JOIN comercial_activity AS  ca ON p.id_comercial_activity = ca.id_comercial_activity
			JOIN beneficiary AS b ON p.id_person=b.id_beneficiary
			WHERE b.id_beneficiary =@id
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO