using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;


namespace OMS.DoctorService.Models
{
    public class DoctorModel
    {
        [Key]
        public Guid Doctor_Id { get; set; }
        [Required]
        public Guid User_Id { get; set; }


        [Required]
        public string First_Name { get; set; }
        [Required]
        public string Last_Name { get; set; }
        [Required]
        public string Middle_Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public int Cell_Phone { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public int NIN { get; set; }
        [Required]
        public string ID_Card { get; set; }
        [Required]
        public string Sex { get; set; }
        [Required]
        public string DOB { get; set; }
        [Required]
        public string Relationship { get; set; }
        [Required]
        public string Profile_Url { get; set; }



        //Medical Licence Number
        [Required]
        public int MLN { get; set; }
        public int Clinic_Phone { get; set; }
        public Guid Specialty_Id { get; set; }
        [ForeignKey(nameof(Specialty_Id))]
        public SpecialtyModel? Specialty { get; set; }        
        public Guid Sub_Specialty_Id { get; set; }
        [ForeignKey(nameof(Sub_Specialty_Id))]
        public SpecialtyModel? Sub_Specialty { get; set; }
        [Required]
        public string Certificate_Url { get; set; }


        //Consultation Time
        [Required]
        public string CT_Start { get; set; }
        [Required]
        public string CT_End { get; set; }
        [Required]
        public bool Is_Active { get; set; } = false;


        [Required]
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
