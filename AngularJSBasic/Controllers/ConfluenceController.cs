using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ConfluenceUI.Controllers
{
    public class ConfluenceController : ApiController
    {
        public HttpResponseMessage GetVersion()
        {
            string[] products = new string[] { "dasd","sadas","das" };

            // Write the list to the response body.
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, products);
            return response;

        }
        public HttpResponseMessage GetVersionContent(string selecteditem)
        {
            string[] products = new string[] { "Test", "Test1", "Test2" };

            // Write the list to the response body.
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, products);
            return response;

        }
    }
}
