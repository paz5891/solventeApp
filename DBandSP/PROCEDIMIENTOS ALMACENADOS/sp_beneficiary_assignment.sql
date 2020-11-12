-- ====================================================================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <06/10/2020>
-- Description:	<PARA CREAR UN REGISTRO DE UNA ASIGNACION DE BENEFICIARIO A UNA POLIZA>.
-- =============================================
CREATE PROCEDURE sp_create_beneficiary_assignment
(@id_beneficiary INTEGER,@id_policy INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			INSERT INTO [beneficiary_assignment] (id_beneficiary,id_policy) VALUES (@id_beneficiary,@id_policy)
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
-- Create date: <06/10/2020>
-- Description:	<PARA BUSCAR LOS REGISTROS DE LAS BENEFICIARIOS EN LAS POLIZAS>
-- =============================================
CREATE PROCEDURE sp_search_beneficiary_assignment_all
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
            SELECT 
            ba.id_policy,
            ba.id_beneficiary,
            p.first_name,
            p.second_name,
            p.first_surname,
            p.second_surname,
            p.business_name
            FROM beneficiary_assignment AS ba 
            JOIN beneficiary AS b ON ba.id_beneficiary=b.id_beneficiary
            JOIN person AS p ON b.id_person=p.id_person
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
-- Create date: <06/10/2020>
-- Description:	<PARA BUSCAR LOS REGISTROS DE LAS BENEFICIARIOS EN LAS POLIZAS>
-- =============================================
CREATE PROCEDURE sp_search_beneficiary_assignment_beneficiary
(@id INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
          SELECT 
            ba.id_policy, 
            ba.id_beneficiary,
            p.first_name,
            p.second_name,
            p.first_surname,
            p.second_surname,
            p.business_name
            FROM beneficiary_assignment AS ba 
            JOIN beneficiary AS b ON ba.id_beneficiary=b.id_beneficiary
            JOIN person AS p ON b.id_person=p.id_person
            WHERE ba.id_beneficiary = @id
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
-- Create date: <06/10/2020>
-- Description:	<PARA BUSCAR LOS REGISTROS DE LAS BENEFICIARIOS EN LAS POLIZAS>
-- =============================================
CREATE PROCEDURE sp_search_beneficiary_assignment_policy
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
			FROM beneficiary_assignment AS ba 
			JOIN beneficiary AS b ON ba.id_beneficiary=b.id_beneficiary
			JOIN person AS p ON b.id_person=p.id_person
			LEFT JOIN rol AS r ON p.id_rol=r.id_rol
			LEFT JOIN municipality AS m ON p.id_municipality= m.id_municipality
			LEFT JOIN department AS d ON d.id_department=m.id_department
			LEFT JOIN type_person AS tp ON p.id_type_person=tp.id_type_person
			LEFT JOIN comercial_activity AS  ca ON p.id_comercial_activity = ca.id_comercial_activity
			WHERE ba.id_policy=@id
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
-- Create date: <06/10/2020>
-- Description:	<PARA ELIMINAR UN REGISTRO DE UNA ASIGNACION DE LAS BENEFICAIRIO A LA POLIZA>
-- =============================================
CREATE PROCEDURE sp_delete_beneficiary_assignment
(@id_beneficiary INTEGER,@id_policy INTEGER)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
			DELETE FROM [beneficiary_assignment] WHERE id_beneficiary=@id_beneficiary  AND id_policy=@id_policy;
			COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO