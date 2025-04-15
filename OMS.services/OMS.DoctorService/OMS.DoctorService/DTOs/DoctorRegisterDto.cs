using OMS.DoctorService.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace OMS.DoctorService.DTOs
{
    public class DoctorRegisterDto
    {
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
        public string NIN { get; set; }    
        [StringLength(7)]   
        public string Work_ID { get; set; }
        public string Sex { get; set; }
        public string DOB { get; set; }
        public string? Profile_Url { get; set; }
        [StringLength(4)] 
        public string password { get; set; }



        //Medical Licence Number
        public string MLN { get; set; }
        [StringLength(11)]
        public string Clinic_Phone { get; set; }
        public Guid Specialty_Id { get; set; }        
        public Guid Sub_Specialty_Id { get; set; }
        public string? Certificate_Url { get; set; }


        //Consultation Time
        public string? CT_Start { get; set; }
        public string? CT_End { get; set; }


        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
