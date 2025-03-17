using System.ComponentModel.DataAnnotations;

namespace DrugService.DTOs
{
    public class DrugDto
    {
        public Guid Drug_Id { get; set; }
        public string Drug_Name { get; set; }
        public string Drug_Type { get; set; }
        public string Expiration_Date { get; set; }


        public decimal Price { get; set; }
        public int Amount { get; set; }


        public DateTime Created_By { get; set; }
        public DateTime? Upadted_By { get; set; }


        public DateTime Created_At { get; set; }
        public DateTime? Upadated_By { get; set; }
    }
}
