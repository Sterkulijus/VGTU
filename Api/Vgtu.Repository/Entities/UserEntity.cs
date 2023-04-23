using Azure;
using Azure.Data.Tables;

namespace Vgtu.Repository.Entities
{
    public class UserEntity : ITableEntity
    {
        public UserEntity()
        {

        }
        public UserEntity(string userId, string password)
        {
            PartitionKey = "VGTU";
            RowKey = userId;
            Password = password;
        }
        public string Password { get; set; }

        public string PartitionKey { get; set; }
        public string RowKey { get; set; }
        public DateTimeOffset? Timestamp { get; set; }
        public ETag ETag { get; set; }
    }
}
            