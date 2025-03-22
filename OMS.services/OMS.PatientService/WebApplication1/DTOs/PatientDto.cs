using System.ComponentModel.DataAnnotations;

namespace WebApplication1.DTOs
{
    public class PatientDto
    {
        [Key]
        public Guid Patient_Id { get; set; }



        [Required]
        [MaxLength(25)]
        public string First_Name { get; set; }
        [MaxLength(25)]
        public string Last_Name { get; set; }
        [MaxLength(25)]
        public string Middle_Name { get; set; }
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [StringLength(11)]
        public string Cell_Phone { get; set; }
        public string Relationship { get; set; }
        [MaxLength(250)]
        public string Address { get; set; }
        public string State { get; set; }
        public long NIN { get; set; }    
        [StringLength(7)] 
        public string Work_ID { get; set; }
        public string Sex { get; set; }
        public string DOB { get; set; }
        public string? Profile_Url { get; set; }
    


        [MaxLength(75)]
        public string EC_FullName { get; set; }
        [StringLength(11)]
        public string EC_Cell_Phone { get; set; }
        [MaxLength(250)]
        public string EC_Address { get; set; }


        public DateTime Created { get; set; }
        public DateTime? Updated { get; set; }
    }
}
