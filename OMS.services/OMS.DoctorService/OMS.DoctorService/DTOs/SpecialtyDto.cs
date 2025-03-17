namespace OMS.DoctorService.DTOs
{
    public class SpecialtyDto
    {
        public Guid Specialty_Id { get; set; }
        public string Specialty_Name { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
