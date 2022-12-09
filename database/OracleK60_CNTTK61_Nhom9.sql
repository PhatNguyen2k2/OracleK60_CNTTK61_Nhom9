-- Insert table from Data_HCM.csv
Select * from data;
-- Set null value to 0
UPDATE DATA 
SET TOÁN = 0
WHERE TOÁN IS NULL;

UPDATE DATA 
SET V?N = 0
WHERE V?N IS NULL;

UPDATE DATA 
SET ANH = 0
WHERE ANH IS NULL;

UPDATE DATA 
SET S? = 0
WHERE S? IS NULL;

UPDATE DATA 
SET ??A = 0
WHERE ??A IS NULL;

UPDATE DATA 
SET GDCD = 0
WHERE GDCD IS NULL;

UPDATE DATA 
SET SINH = 0
WHERE SINH IS NULL;

UPDATE DATA 
SET LÍ = 0
WHERE LÍ IS NULL;

UPDATE DATA 
SET HÓA = 0
WHERE HÓA IS NULL;

-- Get all available score each subject
create or replace FUNCTION get_points(
    get_point nvarchar2
)
   RETURN NVARCHAR2
IS
   l_points VARCHAR2(10000) := NULL;
   execQuery1 VARCHAR2(5000);
BEGIN
   execQuery1 := 'SELECT LISTAGG(distinct TO_CHAR(' || get_point || ', ''90D99''), '','') WITHIN GROUP ( ORDER BY ' || get_point || ' ) FROM data';
    EXECUTE IMMEDIATE execQuery1 into l_points;
    dbms_output.put_line(l_points);
RETURN l_points;
END;

-- Get amount of available score each subject
create or replace FUNCTION get_subjects_point(
    get_subjects nvarchar2
)
   RETURN NVARCHAR2
IS
   l_subjects VARCHAR2(10000) := NULL;
   execQuery VARCHAR2(5000);
BEGIN
   execQuery := 'SELECT LISTAGG(count(*), '', '') WITHIN GROUP ( ORDER BY ' || get_subjects || ' ) FROM data group by ' || get_subjects || ' ';
    EXECUTE IMMEDIATE execQuery into l_subjects;
dbms_output.put_line(l_subjects);
RETURN l_subjects;
EXCEPTION
WHEN OTHERS THEN
   dbms_output.put_line('Exception in subjects_spoint function :'||SQLCODE||SQLERRM);
   RETURN '-1';
END;