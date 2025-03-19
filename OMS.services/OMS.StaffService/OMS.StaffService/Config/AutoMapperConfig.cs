using AutoMapper;
using OMS.StaffService.DTOs;
using OMS.StaffService.Models;

namespace OMS.StaffService.Config
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<StaffDto, StaffModel>().ReverseMap();
            CreateMap<StaffRegistrationDto, StaffModel>().ReverseMap();
        }
    }
}
