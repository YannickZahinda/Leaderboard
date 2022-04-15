import { getAll } from "./LoadScore.js";

const scoreList = document.getElementById("score-list");
const input = document.getElementById("input-name");
const inputScore = document.getElementById("input-score");

const scoreFromUser = () => {
  const requestUrl = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset = UTF-8",
    },
    body: JSON.stringify({
      user: input.value.trim(),
      score: inputScore.value.trim()
    }),
  };
  return requestUrl;
};

const loadScore = async (url) => {
  const { result } = await getAll(url);
  scoreList.innerHTML = result.sort((a, b) => b.score - a.score).map((score) => `<li>${score.user} : ${score.score}</li>`).join('');
};

export { scoreFromUser, loadScore};
