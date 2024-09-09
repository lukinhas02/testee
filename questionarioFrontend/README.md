# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
1. Importações e Inicialização
O código começa com a importação do módulo React e do hook useState da biblioteca React. O useState é crucial para o gerenciamento do estado da aplicação. Além disso, o arquivo de estilos App.css é importado para estilizar os componentes da aplicação.

2. Definição do Componente App
O componente App é o principal componente funcional da aplicação. Ele é responsável por renderizar a interface do usuário e gerenciar o estado da aplicação. Dentro do componente, o hook useState é utilizado para definir e manipular diversos estados:

step: Controla o passo atual da aplicação, sendo 1 para o formulário e 2 para o quiz.
name e matricula: Armazenam o nome e a matrícula do usuário, respectivamente.
answers: Um objeto que guarda as respostas fornecidas pelo usuário para cada pergunta do quiz.
feedback: Um objeto que contém o feedback sobre as respostas, indicando se estão corretas ou fornecendo uma explicação detalhada.
3. Funções Principais
handleNext
A função handleNext é acionada quando o usuário clica no botão "Avançar" no formulário. Ela verifica se os campos de nome e matrícula foram preenchidos. Se ambos os campos estiverem preenchidos, a função muda o estado step para 2, avançando para o quiz. Se algum campo estiver vazio, um alerta é exibido solicitando que o usuário preencha todos os campos.
handleAnswer
A função handleAnswer é responsável por gerenciar as respostas do quiz. Ela é uma função de alta ordem que retorna uma função para lidar com a seleção de respostas. Quando uma resposta é selecionada, a função atualiza o estado answers com a resposta escolhida. Em seguida, verifica se a resposta está correta e atualiza o estado feedback com uma mensagem apropriada. Se a resposta estiver correta, o feedback é "Certo!". Se estiver incorreta, o feedback inclui uma explicação sobre o erro
4. Renderização Condicional
A aplicação renderiza diferentes componentes com base no valor do estado step.
Passo 1 - Formulário
Quando o estado step é 1, o componente renderiza um formulário simples com dois campos de entrada para o nome e a matrícula do usuário. Um botão "Avançar" permite ao usuário prosseguir para o próximo passo se os campos estiverem preenchidos
Passo 2 - Quiz
Quando o estado step é 2, a aplicação renderiza o quiz com cinco perguntas sobre HTML, CSS e React. Cada pergunta inclui opções de resposta em formato de botão de rádio. O feedback é exibido abaixo de cada pergunta com base na resposta selecionada. A classe CSS aplicada ao feedback (correct ou incorrect) determina a estilização do texto de feedback
5. Estilização
O feedback visual das respostas é gerenciado pela estilização condicional. Quando a resposta está correta, o feedback é estilizado com a classe correct. Quando está incorreta, utiliza a classe incorrect. Essas classes são definidas no arquivo App.css para fornecer um visual claro e intuitivo para o usuário.
Conclusão
A aplicação React é projetada para proporcionar uma experiência interativa com um formulário inicial e um quiz sobre HTML, CSS e React. O uso do hook useState para gerenciamento do estado permite uma navegação fluida entre as diferentes etapas da aplicação e o processamento eficiente das respostas do quiz. A aplicação está estruturada de forma modular e clara, facilitando futuras modificações e manutenção. O design é simples e funcional, com um foco na usabilidade e na interação com o usuári