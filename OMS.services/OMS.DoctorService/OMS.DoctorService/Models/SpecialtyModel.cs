using System.ComponentModel.DataAnnotations;

namespace OMS.DoctorService.Models
{
    public class SpecialtyModel
    {
        [Key]
        public Guid Specialty_Id { get; set; }


        [Required]
        public string Name { get; set; }
        public string Description { get; set; }


        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
