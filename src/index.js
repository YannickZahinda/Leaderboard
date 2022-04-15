import './style.css';
import {  scoreFromUser, loadScore} from './modules/scorefile.js';
import { addScore } from './modules/LoadScore.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YvROzDLTaXMHYmb2h2u2/scores';
const btnRefresh = document.getElementById('refresh-score-btn');
const myForm = document.getElementById('my-form');

window.addEventListener('load', () => loadScore(url));
btnRefresh.addEventListener('click', () => loadScore(url));
myForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  await addScore(url, scoreFromUser());
  loadScore(url);
  myForm.reset();
});
