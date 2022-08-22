using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Teste.Models
{
    [Table("Produto")]
    public class Produtos
    {
        [Display(Name = "Código")]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Nome produto")]
        public string NomeProduto { get; set; }

        [Required]
        [Display(Name = "Preço")]
        public float Preco { get; set; }
    }
}
