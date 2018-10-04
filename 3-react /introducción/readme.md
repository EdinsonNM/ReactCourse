## Instroducción a React


Create HTML elements with React's createElement API
Replace React createElement Function Call with JSX
Create a Simple Reusable React Component
Validate Custom React Component Props with PropTypes
Conditionally Render A React Component
Rerender a React Application
Style React Components with className and In Line Styles

Que es el virtual DOM?
El virtual DOM es una copia ligera del DOM, cada uno de sus nodos contiene las mismas funcionalidades para manipularlo que las del DOM pero con una gran diferencia, los cambios realizados en el virtual DOM no se muestran en pantalla y esto hace que el proceso sea más rápido.

React realiza todos los cambios en el virtual DOM mediante el método render() de los componentes, y hablando de estos, la importancia de trabajar con componentes en React es fundamental para el virtual DOM, ya que los componentes contienen estados y cuando hay cambios de estados se plasman en el virtual DOM y después gracias al algoritmo Diff (algoritmo eficiente de diferenciación) solo se realizan los cambios necesarios en el DOM, haciendo el proceso eficiente y rápido.
