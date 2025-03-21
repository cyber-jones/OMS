using System;
using System.Text;
using Newtonsoft.Json;
using OMS.DoctorService.DTOs;
using OMS.DoctorService.HttpRepo.Interfaces;
using OMS.DoctorService.Utils;

namespace OMS.DoctorService.HttpRepo.Implementation;

public class HttpService : IHttpService
{
    private readonly IHttpClientFactory _httpClientFactory;

    public HttpService(IHttpClientFactory httpClientFactory)
    {
        _httpClientFactory = httpClientFactory;
    }


    public async Task<ResponseDto> SendAsync(RequestDto requestDto)
    {
        HttpClient httpClient = _httpClientFactory.CreateClient("StaffApi");
        HttpRequestMessage httpRequestMessage = new();

        httpRequestMessage.Headers.Add("Accept", "application/json");
        httpRequestMessage.RequestUri = new Uri(requestDto.Uri);
        
        if (requestDto.Body != null) {
            string json = JsonConvert.SerializeObject(requestDto.Body);
            httpRequestMessage.Content = new StringContent(json, Encoding.UTF8, "application/json");
        }

        httpRequestMessage.Method = requestDto.ApiType switch {
            ApiType.POST => HttpMethod.Post,
            ApiType.DELETE => HttpMethod.Delete,
            ApiType.PUT => HttpMethod.Put,
            _  => HttpMethod.Get
        };

        HttpResponseMessage httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);

        var data = await httpResponseMessage.Content.ReadAsStringAsync();
        ResponseDto? responseDto = JsonConvert.DeserializeObject<ResponseDto>(data);

        var altResponse = new ResponseDto() { Success = false, Message = "No reponse" };
        return responseDto != null ? responseDto : altResponse;

    }
}
