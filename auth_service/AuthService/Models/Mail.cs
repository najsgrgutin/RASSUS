using Newtonsoft.Json;

namespace AuthService.Models
{
    public class Mail
    {
        [JsonRequired]
        public string To { get; set; }
        [JsonRequired]
        public string Subject { get; set; }
        [JsonRequired]
        public string Body { get; set; }
    }
}
