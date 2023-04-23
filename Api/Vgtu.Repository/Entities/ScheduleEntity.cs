using Azure;
using Azure.Data.Tables;

namespace Vgtu.Repository.Entities
{
    public class ScheduleEntity : ITableEntity
    {
        public ScheduleEntity(string userId, string lecture, string auditorium, string partitionKey, string rowKey)
        {
            UserId = userId;
            Lecture = lecture;
            Auditorium = auditorium;
            //And any other parameters that we need
            PartitionKey = "VGTU";
            RowKey = userId;
        }

        public string UserId { get; set; }
        public string Lecture { get; set; }
        public string Auditorium { get; set; }


        public string PartitionKey { get; set; }
        public string RowKey { get; set; }
        public DateTimeOffset? Timestamp { get; set; }
        public ETag ETag { get; set; }
    }
}
