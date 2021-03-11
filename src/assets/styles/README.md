# ORGANIZAÇÃO ESTILOS

## Guia de uso

- [ITCSS - Arquitetura](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/),
- [BEM - Convenção de nomes](https://en.bem.info/),
- [SUITCSS - Convenção de nomes](http://suitcss.github.io/)
- [Airbnb Styleguide](https://github.com/airbnb/css).

### Como utilizamos ITCSS

**Settings:** Configurações de variáveis e só.

**Tools:** Ferramentas como mixins.

**Generic:** Pouco utilizado por nós no momento, basicamente onde colocamos alguns resets e "normalize".

**Base:** Utilizamos para setar o default de estilo do desing system, pois se todo input tem uma borda 1px solid #000, não precisa criar uma classe .input para definir algo que deveria ser default. Aqui nós definimos tudo o que é html puro.

**Objects:** Definem o comportamento dos "átomos", estes itens poderiam ser considerados Dumb Components ou Presentational Components, são elementos de estilo

**Components:** Manipulação de objetos de layout, digamos que vc precise criar um alinhamento para uma pagina especifica, apesar de tentarmos não utilizar este diretório as vezes ele se faz necessário, principalmente quando vamos manipular nossas classes juntamente com classes de apps legados, ou para manipular comportamentos definidos em Base, por exemplo o input search terá borda verde de 2 px em determinado contexto. Aqui nós utilizamos apenas classes css. Apesar de necessário é pouco utilizado pois priorizamos modificar estilo de elementos a partir de mudança do estado do mesmo, como vimos em Objects.

**Trumps:** Utilizamos para sobrescrever comportamentos de bibliotecas externas e de terceiros. Aqui e somente aqui você pode utilizar !important;

### BEM

### SUITCSS

### Airbnb Styleguide

## Referências

- https://medium.com/tableless/arquitetura-css-d344fb01dd18
- https://en.bem.info/
- http://getbem.com/
- https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
- https://willianjusten.com.br/organizando-seu-css-com-itcss/
- https://www.mundipagg.com/blog/bemit-uma-solucao-para-css/
- https://medium.com/tableless/elevando-seu-n%C3%ADvel-no-css-b2acbb220248
- http://opensource.locaweb.com.br/locawebstyle/
- https://medium.com/tableless/8-regras-simples-para-uma-arquitetura-css-robusta-e-escal%C3%A1vel-545c6dade170
- http://tableless.com.br/oocss-smacss-bem-dry-css-afinal-como-escrever-css/
- https://tableless.com.br/arquitetura-css-anotacoes-da-palestra-rafael-rinaldi/
- http://tableless.com.br/bem-um-novo-metodo-para-seu-css/
- http://tableless.com.br/o-que-e-design-atomic/
- https://tableless.com.br/afinal-como-usar-heranca-no-css/
