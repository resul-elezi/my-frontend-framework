'use strict';

document.getElementById('app').innerHTML = `
  <h2>Welcome to My Frontend Framework!</h2>
  <button id="changeContentBtn">Click me!</button>
`;

document.getElementById('changeContentBtn').addEventListener('click', () => {
  document.getElementById('app').innerHTML = `
    <h2>You've clicked the button!</h2>
    <p>Now the content is changed. Great!</p>
  `;
});
