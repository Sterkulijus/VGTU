using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vgtu.Repository.Entities;

namespace Vgtu.Repository
{
    public interface ITableRepository
    {
        void ValidateUser(string userId, string password);
        List<ScheduleEntity> GetScheduleByUserId(string userId);
    }
}
