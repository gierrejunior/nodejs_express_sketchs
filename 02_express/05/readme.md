usando o framework express
    * Rotas
        rotas sãos os diversos caminhos para as aplicações
    * O exrpress é um framework orientado a rota
        ou seja toda a sua aplicação vai ser baseada na estrutura de rotas


diferenças entre var e const:

var:

    Escopo: Variáveis declaradas com var têm escopo de função (também chamado de escopo global se declaradas fora de uma função).

    Mutabilidade: Variáveis declaradas com var podem ser reatribuídas e atualizadas em qualquer lugar no escopo em que foram declaradas.

const:

    Escopo: Variáveis declaradas com const também têm escopo de bloco, o que significa que estão limitadas ao bloco em que foram declaradas.

    Mutabilidade: Variáveis declaradas com const não podem ser reatribuídas depois de inicializadas, tornando-as imutáveis. No entanto, se a variável for um objeto ou matriz, você ainda pode modificar as propriedades ou elementos dentro do objeto ou matriz.

obs: 

    Em resumo, use var se você deseja que a variável seja acessível em todo o escopo da função ou, se declarada fora de qualquer função, em todo o escopo global. Use const quando desejar que a variável seja de valor constante e não reatribuível. É uma prática recomendada usar const sempre que possível, pois isso ajuda a evitar erros de reatribuição indesejada e torna o código mais seguro e legível. Se precisar que a variável possa ser atualizada, mas ainda queira limitar seu escopo, use let em vez de var.