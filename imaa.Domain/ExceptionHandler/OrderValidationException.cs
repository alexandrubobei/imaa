using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace imaa.Domain.ExceptionHandler
{
    public class OrderValidationException : Exception
    {
        public OrderValidationException() : base() { }

        public OrderValidationException(string message) : base(message) { }

        public OrderValidationException(string message, Exception innerException) : base(message, innerException) { }
    }
}
