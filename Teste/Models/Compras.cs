using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Teste.Models
{
    [Table("Compras")]
    public class Compras
    {
        
        public int Id { get; set; }

        [Display(Name = "Código Produto")]
        public int IdProduto { get; set; }

        [Display(Name = "Nome Produto")]
        public string NomeProduto { get; set; }

        [Display(Name = "Quantidade")]
        public int Quantidade { get; set; }
    }
}
