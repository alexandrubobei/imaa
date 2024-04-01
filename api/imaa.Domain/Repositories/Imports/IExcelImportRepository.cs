namespace imaa.Domain.Repositories.Imports;

public interface IExcelImportRepository
{
    public Task<bool> ImportFile();
}
