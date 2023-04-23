using Azure.Data.Tables;
using Vgtu.Repository.Configs;
using Vgtu.Repository.Entities;

namespace Vgtu.Repository
{
    public class TableRepository : ITableRepository
    {
        private const string UserTable = "Users";
        private readonly TableClient _userTableClient;

        private const string ScheduleTable = "Schedule";
        private readonly TableClient _scheduleTableClient;

        public TableRepository(Configuration confgi)
        {
            CheckIifTableExists(confgi.connectionString);

            _userTableClient = new TableClient(confgi.connectionString, UserTable);
            _scheduleTableClient = new TableClient(confgi.connectionString, ScheduleTable);
        }

        public void CheckIifTableExists(string connectionString)
        {
            var serviceClient = new TableServiceClient(connectionString);
            _ = serviceClient.CreateTableIfNotExists(UserTable);
            _ = serviceClient.CreateTableIfNotExists(ScheduleTable);
        }

        public void ValidateUser(string userId, string password)
        {
            var userEntity = new UserEntity(userId, password);
            //AddUserAsTest(userEntity);

            var users = _userTableClient.Query<UserEntity>(ent => ent.RowKey == userId && ent.Password == password).ToList();

            if(users.Count == 0)
            {
                throw new Exception("Ner tokio user");
            }
        }

        private void AddUserAsTest(UserEntity userEntity)
        {
            _userTableClient.AddEntity(userEntity);
        }

        public List<ScheduleEntity> GetScheduleByUserId(string userId)
        {
            throw new NotImplementedException();
        }
    }
}