using System.ComponentModel.DataAnnotations;

namespace OMS.DoctorService.Models
{
    public class SpecialtyModel
    {
        [Key]
        public Guid Specialty_Id { get; set; }
        [Required]
        public string Specialty_Name { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
