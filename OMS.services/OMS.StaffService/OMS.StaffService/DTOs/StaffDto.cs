using System.ComponentModel.DataAnnotations;

namespace OMS.StaffService.DTOs
{
    public class StaffDto
    {
        public Guid Staff_Id { get; set; }
        public Guid User_Id { get; set; }



        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Middle_Name { get; set; }
        public string Email { get; set; }
        public int Cell_Phone { get; set; }
        public int Relationship { get; set; }
        public string Address { get; set; }
        public string State { get; set; }
        public int NIN { get; set; }
        public string ID_Card { get; set; }
        public string Sex { get; set; }
        public string DOB { get; set; }



        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
    }
}
