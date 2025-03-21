using AutoMapper;
using OMS.DoctorService.DTOs;
using OMS.DoctorService.Models;

namespace OMS.DoctorService.Config
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<DoctorDto, DoctorRegisterDto>().ReverseMap();
            CreateMap<DoctorDto, DoctorModel>().ReverseMap();
            CreateMap<SpecialtyDto, SpecialtyModel>().ReverseMap();
            CreateMap<SpecialtyDto, SpecialtyRegistrationDto>().ReverseMap();
        }
    }
}
