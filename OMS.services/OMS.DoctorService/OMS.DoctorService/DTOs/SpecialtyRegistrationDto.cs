using System;
using System.ComponentModel.DataAnnotations;

namespace OMS.DoctorService.DTOs;

public class SpecialtyRegistrationDto
{
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }

        public DateTime CreatedAt { get; set; } =  DateTime.Now;
}
