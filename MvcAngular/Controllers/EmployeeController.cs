using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcAngular.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MvcAngular.Controllers
{
    public class EmployeeController : Controller
    {
        public ActionResult GetEmployees()
        {
            var list = new List<EmployeeVM>()
            {
                new EmployeeVM
                {
                    FullName="Milton Waddams"
                },
                new EmployeeVM
                {
                    FullName = "Andy Bernard"
                }
            };

            var camelCaseFormatter = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(list, camelCaseFormatter),
                ContentType = "application/json"
            };
            return jsonResult;
        }


        public ActionResult Create(EmployeeVM employee)
        {
            return  new HttpStatusCodeResult(201,"New employee added");
        }

    }
}
