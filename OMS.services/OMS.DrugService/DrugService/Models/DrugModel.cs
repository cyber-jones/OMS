using System.ComponentModel.DataAnnotations;

namespace DrugService.Models
{
    public class DrugModel
    {
        [Key]
        public Guid Drug_Id { get; set; }
        [Required]
        public string Drug_Name { get; set; }
        [Required]
        public string Drug_Type { get; set; }
        [Required]
        public string Expiration_Date { get; set; }


        [Required]
        public decimal Price { get; set; }
        [Required]
        public int Amount { get; set; }


        [Required]
        public DateTime Created_By { get; set; }
        public DateTime? Upadted_By { get; set; }


        [Required]
        public DateTime Created_At { get; set; }
        public DateTime? Upadated_By { get; set; }
    }
}
