import React, { useState } from 'react';
import './App.css';

function App() {
  // Define o estado inicial para controlar o passo do formulário, os dados do usuário e as respostas do quiz
  const [step, setStep] = useState(1); // Passo atual (1: formulário, 2: quiz)
  const [name, setName] = useState(''); // Nome do usuário
  const [matricula, setMatricula] = useState(''); // Matrícula do usuário
  const [answers, setAnswers] = useState({}); // Respostas dadas pelo usuário
  const [feedback, setFeedback] = useState({}); // Feedback sobre as respostas (certo/errado)

  // Função para avançar para o próximo passo (do formulário para o quiz)
  const handleNext = () => {
    if (name && matricula) {
      setStep(2);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  // Função para lidar com as respostas do quiz
  const handleAnswer = (questionId, correctAnswer, explanation) => (e) => {
    const selectedAnswer = e.target.value;
    setAnswers({ ...answers, [questionId]: selectedAnswer });

    // Verifica se a resposta selecionada está correta ou não
    if (selectedAnswer === correctAnswer) {
      setFeedback({ ...feedback, [questionId]: 'Certo!' });
    } else {
      setFeedback({ ...feedback, [questionId]: explanation });
    }
  };

  // Renderiza a primeira página (formulário)
  if (step === 1) {
    return (
      <div className="form-container">
        <h1>Bem-vindo ao Questionário!</h1>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Matrícula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <button onClick={handleNext}>Avançar</button>
      </div>
    );
  }

  // Renderiza a segunda página (quiz)
  return (
    <div className="quiz-container">
      <h1>Questionário sobre HTML, CSS e React</h1>

      <div className="question">
        <h3>1. Qual tag HTML é usada para criar um link?</h3>
        <input
          type="radio"
          id="q1a1"
          name="q1"
          value="<a>"
          onChange={handleAnswer('q1', '<a>', 'A tag correta para criar um link é <a>.')}
        />
        <label htmlFor="q1a1">&lt;a&gt;</label><br />

        <input
          type="radio"
          id="q1a2"
          name="q1"
          value="<link>"
          onChange={handleAnswer('q1', '<a>', '<link> é usada para vincular um documento HTML a um arquivo CSS externo.')}
        />
        <label htmlFor="q1a2">&lt;link&gt;</label><br />

        <input
          type="radio"
          id="q1a3"
          name="q1"
          value="<url>"
          onChange={handleAnswer('q1', '<a>', '<url> não é uma tag HTML válida.')}
        />
        <label htmlFor="q1a3">&lt;url&gt;</label><br />

        <input
          type="radio"
          id="q1a4"
          name="q1"
          value="<href>"
          onChange={handleAnswer('q1', '<a>', '<href> é um atributo da tag <a>, não uma tag HTML.')}
        />
        <label htmlFor="q1a4">&lt;href&gt;</label><br />

        <p className={feedback.q1 === 'Certo!' ? 'correct' : 'incorrect'}>{feedback.q1}</p>
      </div>

      <div className="question">
        <h3>2. Qual propriedade CSS é usada para mudar a cor do texto?</h3>
        <input
          type="radio"
          id="q2a1"
          name="q2"
          value="color"
          onChange={handleAnswer('q2', 'color', 'A propriedade correta para mudar a cor do texto é color.')}
        />
        <label htmlFor="q2a1">color</label><br />

        <input
          type="radio"
          id="q2a2"
          name="q2"
          value="background"
          onChange={handleAnswer('q2', 'color', 'background altera a cor de fundo do elemento, não a cor do texto.')}
        />
        <label htmlFor="q2a2">background</label><br />

        <input
          type="radio"
          id="q2a3"
          name="q2"
          value="border"
          onChange={handleAnswer('q2', 'color', 'border define a borda ao redor do elemento.')}
        />
        <label htmlFor="q2a3">border</label><br />

        <input
          type="radio"
          id="q2a4"
          name="q2"
          value="font"
          onChange={handleAnswer('q2', 'color', 'font define a fonte e seu tamanho, mas não a cor do texto.')}
        />
        <label htmlFor="q2a4">font</label><br />

        <p className={feedback.q2 === 'Certo!' ? 'correct' : 'incorrect'}>{feedback.q2}</p>
      </div>

      <div className="question">
        <h3>3. Qual método é usado para criar um novo elemento em React?</h3>
        <input
          type="radio"
          id="q3a1"
          name="q3"
          value="React.createElement()"
          onChange={handleAnswer('q3', 'React.createElement()', 'O método correto para criar um novo elemento em React é React.createElement().')}
        />
        <label htmlFor="q3a1">React.createElement()</label><br />

        <input
          type="radio"
          id="q3a2"
          name="q3"
          value="React.newElement()"
          onChange={handleAnswer('q3', 'React.createElement()', 'React.newElement() não existe em React.')}
        />
        <label htmlFor="q3a2">React.newElement()</label><br />

        <input
          type="radio"
          id="q3a3"
          name="q3"
          value="React.addElement()"
          onChange={handleAnswer('q3', 'React.createElement()', 'React.addElement() não existe em React.')}
        />
        <label htmlFor="q3a3">React.addElement()</label><br />

        <input
          type="radio"
          id="q3a4"
          name="q3"
          value="React.insertElement()"
          onChange={handleAnswer('q3', 'React.createElement()', 'React.insertElement() não existe em React.')}
        />
        <label htmlFor="q3a4">React.insertElement()</label><br />

        <p className={feedback.q3 === 'Certo!' ? 'correct' : 'incorrect'}>{feedback.q3}</p>
      </div>

      <div className="question">
        <h3>4. Qual tag HTML é usada para inserir uma imagem?</h3>
        <input
          type="radio"
          id="q4a1"
          name="q4"
          value="<img>"
          onChange={handleAnswer('q4', '<img>', 'A tag correta para inserir uma imagem é <img>.')}
        />
        <label htmlFor="q4a1">&lt;img&gt;</label><br />

        <input
          type="radio"
          id="q4a2"
          name="q4"
          value="<picture>"
          onChange={handleAnswer('q4', '<img>', '<picture> é usada para fornecer diferentes versões de uma imagem, mas não para inserir uma imagem diretamente.')}
        />
        <label htmlFor="q4a2">&lt;picture&gt;</label><br />

        <input
          type="radio"
          id="q4a3"
          name="q4"
          value="<image>"
          onChange={handleAnswer('q4', '<img>', '<image> não é uma tag HTML válida.')}
        />
        <label htmlFor="q4a3">&lt;image&gt;</label><br />

        <input
          type="radio"
          id="q4a4"
          name="q4"
          value="<src>"
          onChange={handleAnswer('q4', '<img>', '<src> é um atributo da tag <img>, não uma tag HTML.')}
        />
        <label htmlFor="q4a4">&lt;src&gt;</label><br />

        <p className={feedback.q4 === 'Certo!' ? 'correct' : 'incorrect'}>{feedback.q4}</p>
      </div>

      <div className="question">
        <h3>5. Qual tag HTML é usada para criar uma lista não ordenada?</h3>
        <input
          type="radio"
          id="q5a1"
          name="q5"
          value="<ul>"
          onChange={handleAnswer('q5', '<ul>', 'A tag correta para criar uma lista não ordenada é <ul>.')}
        />
        <label htmlFor="q5a1">&lt;ul&gt;</label><br />

        <input
          type="radio"
          id="q5a2"
          name="q5"
          value="<ol>"
          onChange={handleAnswer('q5', '<ul>', '<ol> é usada para criar uma lista ordenada, onde os itens são numerados.')}
        />
        <label htmlFor="q5a2">&lt;ol&gt;</label><br />

        <input
          type="radio"
          id="q5a3"
          name="q5"
          value="<li>"
          onChange={handleAnswer('q5', '<ul>', '<li> é usada para definir cada item dentro de uma lista, mas não para criar a lista em si.')}
        />
        <label htmlFor="q5a3">&lt;li&gt;</label><br />

        <input
          type="radio"
          id="q5a4"
          name="q5"
          value="<list>"
          onChange={handleAnswer('q5', '<ul>', '<list> não é uma tag HTML válida.')}
        />
        <label htmlFor="q5a4">&lt;list&gt;</label><br />

        <p className={feedback.q5 === 'Certo!' ? 'correct' : 'incorrect'}>{feedback.q5}</p>
      </div>
    </div>
  );
}

export default App;

