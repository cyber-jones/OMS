using System.ComponentModel.DataAnnotations;

namespace DrugService.DTOs
{
    public class DrugDto
    {
        public Guid Drug_Id { get; set; }

        [Required]
        public string Drug_Name { get; set; }
        public string? Manufacturer { get; set; }
        public string Description { get; set; }
        public string Side_Effects { get; set; }
        public string Disclaimer { get; set; }
        public string Category { get; set; }
        public string? Consume_Type { get; set; }
        public string? Image { get; set; }
        public decimal Price { get; set; }
        public int Count_In_Stock { get; set; }
        public string Expiry_Date { get; set; }


        public string Created_By { get; set; } 
        public string? Upadted_By { get; set; }


        public DateTime Created_At { get; set; }
        public DateTime? Updated_At { get; set; }
    }
}
