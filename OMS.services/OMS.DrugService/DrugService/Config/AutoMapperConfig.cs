using AutoMapper;
using DrugService.DTOs;
using DrugService.Models;

namespace DrugService.Config
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<DrugModel, DrugDto>();
        }
    }
}
