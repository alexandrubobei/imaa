namespace imaa.Persistence.Exceptions;

public class DataAccessException : Exception
{
    public DataAccessException() : base() { }

    public DataAccessException(string message) : base(message) { }

    public DataAccessException(string message, Exception innerException) : base(message, innerException) { }
}
