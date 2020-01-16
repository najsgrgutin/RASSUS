using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Helpers
{
    public class ApiRequestHelper
    {
        private static readonly HttpClient Client = new HttpClient();
        private static string _machineName;

        public ApiRequestHelper(IConfiguration configuration, string token)
        {
            try
            {
                var baseUrl = configuration.GetSection("APIUrl").Value;
                Client.BaseAddress = new Uri(baseUrl);
                Client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                Client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("JWT", token);
                //Client.DefaultRequestHeaders.Add("Authorization", $"JWT {token}");
                ServicePointManager.ServerCertificateValidationCallback +=
                    (sender, cert, chain, sslPolicyErrors) => true;
            }
            catch
            {

            }
        }

        public bool PostData<T>(string controller, T data)
        {
            try
            {
                var response = PostDataAsync(controller, data);

                while (!response.IsCompleted)
                {
                    Task.Delay(250);
                }

                return response.Result;
            }
            catch
            {
                return false;
            }
        }

        private async Task<bool> PostDataAsync<T>(string controller, T data)
        {
            var postBody = new StringContent(JsonConvert.SerializeObject(data), Encoding.UTF8, "application/json");
            try
            {
                var requestResult = await Client.PostAsync(controller, postBody);
                if (requestResult.StatusCode == HttpStatusCode.OK)
                {
                    return true;
                }
            }
            catch
            {
            }
            finally
            {
                postBody.Dispose();
            }

            return false;
        }
    }
}
