using AutoMapper;
using DrugService.DTOs;
using DrugService.Models;
using OMS.DrugService.DTOs;

namespace DrugService.Config
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<DrugModel, DrugDto>().ReverseMap();
            CreateMap<DrugModel, DrugRegisterDto>().ReverseMap();
        }
    }
}
