using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Vgtu.Repository;

namespace Vgtu.Api.Controllers
{
    [Route("api")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        private readonly ITableRepository _repository;
        public BaseController(ITableRepository repository)
        {
            _repository = repository;
        }


        [HttpGet]
        [Route("ValidateUser")]
        public async Task<ActionResult> ValidateUser(string userId, string password)
        {
            _repository.ValidateUser(userId, password);
            return Ok();
        }

        [HttpGet]
        [Route("GetUserSchedule")]
        public async Task<ActionResult> GetSchedule(string userId)
        {

            return Ok();
        }
    }
}
