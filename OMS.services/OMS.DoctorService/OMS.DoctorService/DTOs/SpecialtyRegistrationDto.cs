using System;

namespace OMS.DoctorService.DTOs;

public class SpecialtyRegistrationDto
{
        public string Name { get; set; }
        public string Description { get; set; }

        public DateTime CreatedAt { get; set; } =  DateTime.Now;
        public DateTime? UpdatedAt { get; set; }
}
