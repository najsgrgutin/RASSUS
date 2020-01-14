using System.Collections.Generic;
using Newtonsoft.Json;

namespace AuthService.Models
{
    public class Mail
    {
        public List<string> To { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
    }

    public class MailPost
    {
        [JsonRequired]
        public string To { get; set; }
        [JsonRequired]
        public string Subject { get; set; }
        [JsonRequired]
        public string Body { get; set; }
    }
}
