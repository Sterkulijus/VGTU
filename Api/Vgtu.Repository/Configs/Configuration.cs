namespace Vgtu.Repository.Configs
{
    public class Configuration
    {
        public Configuration(string storageConnectionString)
        {
            connectionString = storageConnectionString;
        }

        public string connectionString { get; set; }
    }
}
