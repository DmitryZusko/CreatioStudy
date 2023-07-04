IF EXISTS (SELECT * FROM sys.views 
WHERE object_id = OBJECT_ID(N'[dbo].[GenUserAgeView]'))
DROP VIEW [dbo].GenUserAgeView
GO
create view GenUserAgeView
as
select Id as GenId, Name as GenName, BirthDate as GenBirthDate,
datediff(day, BirthDate, getdate()) as GenAgeInDays
from Contact