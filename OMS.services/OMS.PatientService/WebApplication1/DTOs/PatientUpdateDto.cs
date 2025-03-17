namespace WebApplication1.DTOs
{
    public class PatientUpdateDto
    {
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Middle_Name { get; set; }
        public string Email { get; set; }
        public int Cell_Phone { get; set; }
        public int Work_Phone { get; set; }
        public string Address { get; set; }
        public string State { get; set; }
        public int NIN { get; set; }
        public string Sex { get; set; }
        public string DOB { get; set; }



        public string EC_FullName { get; set; }
        public int EC_Cell_Phone { get; set; }
        public string EC_Address { get; set; }

        public DateTime Updated { get; set; }
    }
}
