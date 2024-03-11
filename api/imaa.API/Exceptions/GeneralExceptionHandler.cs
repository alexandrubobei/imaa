using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace imaa.API.Exceptions
{
    public class GeneralExceptionHandler : IExceptionHandler
    {
        private readonly ILogger<GeneralExceptionHandler> _logger;

        public GeneralExceptionHandler(ILogger<GeneralExceptionHandler> logger)
        {
            _logger = logger;
        }
        public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
        {
            _logger.LogError("An error occurred while processing your request: {ExceptionMessage}", exception.Message);

            var problemDetails = new ProblemDetails
            {
                Status = (int)HttpStatusCode.InternalServerError,
                Type = exception.GetType().Name,
                Title = "An unhandled error occurred",
                Detail = exception.Message
            };

            switch (exception)
            {
                case UnauthorizedAccessException:
                    problemDetails.Status = (int)HttpStatusCode.Unauthorized;
                    problemDetails.Title = "You are UNAUTHORIZED to do this action !";
                    break;

                case NotImplementedException:
                    problemDetails.Status = (int)HttpStatusCode.NotImplemented;
                    problemDetails.Title = "This action is not implemented.";
                    break;

                case FileNotFoundException:
                    problemDetails.Status = (int)HttpStatusCode.NotFound;
                    problemDetails.Title = "Resource not found.";
                    break;
            }

            httpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;
            await httpContext.Response.WriteAsJsonAsync(problemDetails, cancellationToken);

            return true;
        }
    }
}
