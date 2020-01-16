using System.Collections.Generic;
using Newtonsoft.Json;

namespace AuthService.Models
{
    public class Mail
    {
        [JsonProperty("to")]
        public List<string> To { get; set; }
        [JsonProperty("subject")]
        public string Subject { get; set; }
        [JsonProperty("body")]
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
