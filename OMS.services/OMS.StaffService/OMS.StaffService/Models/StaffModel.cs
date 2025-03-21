using System.ComponentModel.DataAnnotations;

namespace OMS.StaffService.Models
{
    public class StaffModel
    {
        [Key]
        public Guid Staff_Id { get; set; }



        [MaxLength(25)]
        public string First_Name { get; set; }
        [MaxLength(25)]
        public string Last_Name { get; set; }
        [MaxLength(25)]
        public string Middle_Name { get; set; }
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        public string Cell_Phone { get; set; }
        public string Relationship { get; set; }
        [MaxLength(250)]
        public string Address { get; set; }
        public string State { get; set; }
        public long NIN { get; set; }    
        [MaxLength(7)]   
        public string Work_ID { get; set; }
        public string Sex { get; set; }
        public string DOB { get; set; }



        public DateTime Created { get; set; }
        public DateTime? Updated { get; set; }
    }
}
