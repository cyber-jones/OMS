using System.ComponentModel.DataAnnotations;

namespace OMS.DoctorService.DTOs
{
    public class SpecialtyDto
    {
        [Key]
        public Guid Specialty_Id { get; set; }
        
        public string Name { get; set; }
        public string Description { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
