using OMS.DoctorService.Models;
using System.ComponentModel.DataAnnotations.Schema;


namespace OMS.DoctorService.DTOs
{
    public class DoctorRegisterDto
    {
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Middle_Name { get; set; }
        public string Email { get; set; }
        public int Cell_Phone { get; set; }
        public string State { get; set; }
        public int NIN { get; set; }
        public string Sex { get; set; }
        public string DOB { get; set; }
        public string Relationship { get; set; }
        public string Profile_Url { get; set; }



        //Medical Licence Number
        public int MLN { get; set; }
        public int Clinic_Phone { get; set; }
        public Guid Specialty_Id { get; set; }
        [ForeignKey(nameof(Specialty_Id))]
        public SpecialtyModel Specialty { get; set; }
        public Guid Sub_Specialty_Id { get; set; }
        [ForeignKey(nameof(Specialty_Id))]
        public SpecialtyModel Sub_Specialty { get; set; }
        public string Certificate_Url { get; set; }


        //Consultation Time
        public string CT_Start { get; set; }
        public string CT_End { get; set; }
        public bool Is_Active { get; set; } = false;


        public DateTime CreatedAt { get; set; }
    }
}
