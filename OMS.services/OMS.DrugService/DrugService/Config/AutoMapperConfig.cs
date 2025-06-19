using AutoMapper;
using DrugService.DTOs;
using DrugService.Models;
using OMS.DrugService.DTOs;
using OMS.DrugService.Models;

namespace DrugService.Config
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<DrugModel, DrugDto>().ReverseMap();
            CreateMap<DrugModel, DrugRegisterDto>().ReverseMap();
            CreateMap<CartModel, CartDto>().ReverseMap();
            CreateMap<CartModel, CartRegisterDto>().ReverseMap();
            CreateMap<OrderDetailsModel, CartModel>();
        }
    }
}
