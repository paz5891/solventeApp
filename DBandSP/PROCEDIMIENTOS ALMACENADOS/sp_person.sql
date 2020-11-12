-- ====================================================================================================

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<GERSON RAMOS>
-- Create date: <28/08/2020>
-- Description:	<PARA CREAR UN REGISTRO DE UNA PERSONA>
-- =============================================
CREATE PROCEDURE sp_create_person
    (@json NVARCHAR(MAX))
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
           /* DECLARE @json NVARCHAR(MAX);
            SET @json = N'
            {
                    "id_rol": 1,
                    "id_municipality": 1,
                    "id_type_person": 1,
                    "id_comercial_activity": 1,
                    "nit": "12345678-k",
                    "cui": "1234567890123",
                    "first_name": "Gerson",
                    "second_name": "Arisai",
                    "first_surname": "Ramos",
                    "second_surname": "Portillo",
                    "date_of_birth": "1999/01/27",
                    "business_name": null,
                    "constitution_date": null,
                    "commercial_patent_number": null,
                    "email": "gersonramos46@gmail.com",
                    "avatar": "/storage/avatar/img_443534534f_gersonramos.jpg",
                    "sexo": "M",
                    "phone_person": [
                        {
                            "id_phone_catalog":1,
                            "phone": "47490897"
                        },
                        {
                            "id_phone_catalog": 2,
                            "phone": "55555555"
                        }
                    ],
                    "address_person": [
                        {git
                            "id_address_catalog": 1,
                            "address": "3ra calle 0-39 zona 2 barrioa la esperanza"
                        },
                        {
                            "id_address_catalog": 2,
                            "address": "EL PORVENIR"
                        }
                    ],
                    "attachment_person":[
                        {
                            "id_attachment_catalog": 1,
                            "attachment": "/storage/attachment/img_443534534f_cui.jpg",
                            "description": null
                        },
                        {
                            "id_attachment_catalog": 2,
                            "attachment": "/storage/attachment/img_443534534f_nit.jpg",
                            "description": "temporal"
                        }
                    ]
                }    
            ';*/

    -- PERSON
    DECLARE @id_person INTEGER;
    DECLARE @id_rol INTEGER;
    DECLARE @id_municipality INTEGER;
    DECLARE @id_type_person INTEGER;
    DECLARE @id_comercial_activity INTEGER;
    DECLARE @nit VARCHAR(16);
    DECLARE @cui VARCHAR(32);
    DECLARE @first_name VARCHAR(128);
    DECLARE @second_name VARCHAR(128);
    DECLARE @first_surname VARCHAR(128);
    DECLARE @second_surname VARCHAR(128);
    DECLARE @date_of_birth DATE;
    DECLARE @business_name VARCHAR(128);
    DECLARE @constitution_date DATE;
    DECLARE @commercial_patent_number VARCHAR(32);
    DECLARE @email VARCHAR(128);
    DECLARE @avatar VARCHAR(128);
    DECLARE @sexo CHAR(1);

    -- PHONE
    DECLARE @countphone INTEGER
    DECLARE @id_phone_catalog INTEGER;
    DECLARE @phone VARCHAR(16);

    -- ADDRESS
    DECLARE @countaddress INTEGER
    DECLARE @id_address_catalog INTEGER;
    DECLARE @address VARCHAR(128);

    -- attachment ATTACHMENT
    DECLARE @countattachment INTEGER
    DECLARE @id_attachment_catalog INTEGER;
    DECLARE @attachment VARCHAR(128);
    DECLARE @description VARCHAR(MAX);

    SELECT
        @id_rol =JSON_VALUE(@json,'$.id_rol'),
        @id_municipality =JSON_VALUE(@json,'$.id_municipality'),
        @id_type_person =JSON_VALUE(@json,'$.id_type_person'),
        @id_comercial_activity =JSON_VALUE(@json,'$.id_comercial_activity'),
        @nit =JSON_VALUE(@json,'$.nit'),
        @cui =JSON_VALUE(@json,'$.cui'),
        @first_name =JSON_VALUE(@json,'$.first_name'),
        @second_name =JSON_VALUE(@json,'$.second_name'),
        @first_surname =JSON_VALUE(@json,'$.first_surname'),
        @second_surname =JSON_VALUE(@json,'$.second_surname'),
        @date_of_birth =JSON_VALUE(@json,'$.date_of_birth'),
        @business_name =JSON_VALUE(@json,'$.business_name'),
        @constitution_date =JSON_VALUE(@json,'$.constitution_date'),
        @commercial_patent_number =JSON_VALUE(@json,'$.commercial_patent_number'),
        @email =JSON_VALUE(@json,'$.email'),
        @avatar =JSON_VALUE(@json,'$.avatar'),
        @sexo =JSON_VALUE(@json,'$.sexo');

    INSERT INTO person
        (id_rol,id_municipality,id_type_person,id_comercial_activity,nit,cui,first_name,second_name,first_surname,second_surname,date_of_birth,business_name,constitution_date,commercial_patent_number,email,avatar,sexo)
    VALUES
        (@id_rol, @id_municipality, @id_type_person, @id_comercial_activity, @nit, @cui, @first_name, @second_name, @first_surname, @second_surname, @date_of_birth, @business_name, @constitution_date, @commercial_patent_number, @email, @avatar,@sexo)


    SELECT @id_person=id_person
    FROM person
    WHERE cui = @cui

    SELECT @countphone=COUNT(1)
    FROM OPENJSON(@json,'$.phone_person');
    SELECT @countaddress=COUNT(1)
    FROM OPENJSON(@json,'$.address_person');
    SELECT @countattachment=COUNT(1)
    FROM OPENJSON(@json,'$.attachment_person');

    DECLARE @i INTEGER = 0;
    WHILE @i<@countphone
    BEGIN
        SELECT
            @id_phone_catalog =JSON_VALUE(@json,CONCAT('$.phone_person[',@i,'].id_phone_catalog')),
            @phone= JSON_VALUE(@json,CONCAT('$.phone_person[',@i,'].phone'))

        INSERT INTO phone
            (id_person,id_phone_catalog,phone)
        VALUES
            (@id_person, @id_phone_catalog, @phone);
        SET @i=@i+1
    END


    SET  @i = 0;
    WHILE @i<@countaddress
    BEGIN
        SELECT
            @id_address_catalog= JSON_VALUE(@json,CONCAT('$.address_person[',@i,'].id_address_catalog')),
            @address= JSON_VALUE(@json,CONCAT('$.address_person[',@i,'].address'))
        INSERT INTO [address]
            (id_person,id_address_catalog,[address])
        VALUES
            (@id_person, @id_address_catalog, @address);
        SET @i=@i+1
    END

    SET  @i = 0;
    WHILE @i<@countattachment
    BEGIN
        SELECT
            @id_attachment_catalog= JSON_VALUE(@json,CONCAT('$.attachment_person[',@i,'].id_attachment_catalog')),
            @attachment= JSON_VALUE(@json,CONCAT('$.attachment_person[',@i,'].attachment')),
            @description= JSON_VALUE(@json,CONCAT('$.attachment_person[',@i,'].description'))

        INSERT INTO attachment
            (id_person,id_attachment_catalog,attachment,[description],[date])
        VALUES
            (@id_person, @id_attachment_catalog, @attachment, @description, GETDATE());
        SET @i=@i+1
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
-- Description:	<PARA DESAHILITAR O ACTIVAR UN REGISTRO DE UNA PERSONA>
-- =============================================
CREATE PROCEDURE sp_delete_person
    (@id INTEGER)
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
           DECLARE @disabled BIT = (SELECT [disabled]
    FROM person
    WHERE id_person = @id)
           DECLARE @newDisabled BIT;
            IF @disabled = 0
                BEGIN
        SET @newDisabled = 1;
    END
            ELSE
                BEGIN
        SET @newDisabled = 0;
    END

			UPDATE person SET [disabled]=@newDisabled WHERE id_person = @id
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
-- Description:	<PARA MODIFICAR UN REGISTRO DE UNA PERSONA>
-- =============================================
CREATE PROCEDURE sp_update_person
    (@json NVARCHAR(MAX))
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
           /* DECLARE @json NVARCHAR(MAX);
            SET @json = N'
            {
                    "id_person":1,
                    "id_rol": 1,
                    "id_municipality": 1,
                    "id_type_person": 1,
                    "id_comercial_activity": 1,
                    "nit": "12345678-k",
                    "cui": "1234567890123",
                    "first_name": "Gerson",
                    "second_name": "Arisai",
                    "first_surname": "Ramos",
                    "second_surname": "Portillo",
                    "date_of_birth": "1999/01/27",
                    "business_name": null,
                    "constitution_date": null,
                    "commercial_patent_number": null,
                    "email": "gersonramos46@gmail.com",
                    "avatar": "/storage/avatar/img_443534534f_gersonramos.jpg",
                    "sexo": "M"
                }    
            ';*/

    -- PERSON
    DECLARE @id_person INTEGER;
    DECLARE @id_rol INTEGER;
    DECLARE @id_municipality INTEGER;
    DECLARE @id_type_person INTEGER;
    DECLARE @id_comercial_activity INTEGER;
    DECLARE @nit VARCHAR(16);
    DECLARE @cui VARCHAR(32);
    DECLARE @first_name VARCHAR(128);
    DECLARE @second_name VARCHAR(128);
    DECLARE @first_surname VARCHAR(128);
    DECLARE @second_surname VARCHAR(128);
    DECLARE @date_of_birth DATE;
    DECLARE @business_name VARCHAR(128);
    DECLARE @constitution_date DATE;
    DECLARE @commercial_patent_number VARCHAR(32);
    DECLARE @email VARCHAR(128);
    DECLARE @avatar VARCHAR(128);
    DECLARE @sexo CHAR(1);

 

    SELECT
        @id_person = JSON_VALUE(@json,'$.id_person'),
        @id_rol =JSON_VALUE(@json,'$.id_rol'),
        @id_municipality =JSON_VALUE(@json,'$.id_municipality'),
        @id_type_person =JSON_VALUE(@json,'$.id_type_person'),
        @id_comercial_activity =JSON_VALUE(@json,'$.id_comercial_activity'),
        @nit =JSON_VALUE(@json,'$.nit'),
        @cui =JSON_VALUE(@json,'$.cui'),
        @first_name =JSON_VALUE(@json,'$.first_name'),
        @second_name =JSON_VALUE(@json,'$.second_name'),
        @first_surname =JSON_VALUE(@json,'$.first_surname'),
        @second_surname =JSON_VALUE(@json,'$.second_surname'),
        @date_of_birth =JSON_VALUE(@json,'$.date_of_birth'),
        @business_name =JSON_VALUE(@json,'$.business_name'),
        @constitution_date =JSON_VALUE(@json,'$.constitution_date'),
        @commercial_patent_number =JSON_VALUE(@json,'$.commercial_patent_number'),
        @email =JSON_VALUE(@json,'$.email'),
        @avatar =JSON_VALUE(@json,'$.avatar'),
        @sexo =JSON_VALUE(@json,'$.sexo');

    UPDATE person SET id_rol=@id_rol,
    id_municipality=@id_municipality,
    id_type_person=@id_type_person,
    id_comercial_activity=@id_comercial_activity,
    nit=@nit,
    cui=@cui,
    first_name=@first_name,
    second_name=@second_name,
    first_surname=@first_surname,
    second_surname=@second_surname,
    date_of_birth=@date_of_birth,
    business_name=@business_name,
    constitution_date=@constitution_date,
    commercial_patent_number=@commercial_patent_number,
    email=@email,
    avatar=@avatar,
    sexo=@sexo
    WHERE id_person = @id_person
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
-- Description:	<PARA CARGAR LOS DATOS DE LAS PERSONAS SEGUND ASIGNADO EL TIPO PERSONA>
-- =============================================
CREATE PROCEDURE sp_search_person
   (@id_type_person INTEGER)
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
            SELECT
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
        p.[disabled]
    FROM person AS p
        LEFT JOIN rol AS r ON p.id_rol=r.id_rol
        LEFT JOIN municipality AS m ON p.id_municipality= m.id_municipality
        LEFT JOIN department AS d ON d.id_department=m.id_department
        JOIN type_person AS tp ON p.id_type_person=tp.id_type_person
        LEFT JOIN comercial_activity AS  ca ON p.id_comercial_activity = ca.id_comercial_activity
    WHERE tp.id_type_person = @id_type_person
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
-- Description:	<PARA CARGAR LOS DATOS DE LAS PERSONAS>
-- =============================================
CREATE PROCEDURE sp_search_personall
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
            SELECT
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
        p.[disabled]
    FROM person AS p
        LEFT JOIN rol AS r ON p.id_rol=r.id_rol
        LEFT JOIN municipality AS m ON p.id_municipality= m.id_municipality
        LEFT JOIN department AS d ON d.id_department=m.id_department
        LEFT JOIN type_person AS tp ON p.id_type_person=tp.id_type_person
        LEFT JOIN comercial_activity AS  ca ON p.id_comercial_activity = ca.id_comercial_activity
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
-- Description:	<PARA CARGAR LOS DATOS DE UNA PERSONA>
-- =============================================
CREATE PROCEDURE sp_search_personsingle
    (@id INTEGER)
AS
BEGIN
    BEGIN TRAN
    BEGIN TRY
            SELECT
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
        p.[disabled]
    FROM person AS p
        LEFT JOIN rol AS r ON p.id_rol=r.id_rol
        LEFT JOIN municipality AS m ON p.id_municipality= m.id_municipality
        LEFT JOIN department AS d ON d.id_department=m.id_department
        LEFT JOIN type_person AS tp ON p.id_type_person=tp.id_type_person
        LEFT JOIN comercial_activity AS  ca ON p.id_comercial_activity = ca.id_comercial_activity
    WHERE p.id_person =@id
		    COMMIT TRAN
		END TRY 
		BEGIN CATCH
			ROLLBACK TRAN
		END CATCH
END
GO