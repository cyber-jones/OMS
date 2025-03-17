using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class PatientModel
    {
        [Key]
        public Guid Patient_Id { get; set; }
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
        public int Work_Phone { get; set; }
        [Required]
        public int Relationship { get; set; }
        [Required]
        public string Address {  get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public int NIN {  get; set; }
        [Required]
        public string Sex { get; set; }
        [Required]
        public string DOB { get; set; }



        public string EC_FullName { get; set; }
        public int EC_Cell_Phone { get; set; }
        public string EC_Address { get; set; }



        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
    }
}
