using AutoMapper;
using Microsoft.Identity.Client;
using WebApplication1.DTOs;
using WebApplication1.Models;

namespace WebApplication1.Config
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<PatientModel, PatientDto>().ReverseMap();
            CreateMap<PatientRegisterDto, PatientModel>().ReverseMap();
        }
    }
}
