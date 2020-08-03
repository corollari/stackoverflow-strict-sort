function getVoteCount(element){
  return parseInt(element.querySelector(".js-vote-count").innerText);
}
document.addEventListener('DOMContentLoaded', function() {
  const answers = document.querySelectorAll(".answer");
  if(answers.length===0){
    return;
  }
  const answerIds = document.querySelectorAll("#answers>a[name]");
  const firstAnswerVotes = getVoteCount(answers[0]);
  let nextAnswerIndex = 0;
  for(let i=1; i<answers.length; i++){
    const votes = getVoteCount(answers[i]);
    if(votes > firstAnswerVotes){
      nextAnswerIndex = i;
    } else {
      break;
    }
  }
  if(nextAnswerIndex !== 0){
    answerIds[1].parentNode.insertBefore(answerIds[nextAnswerIndex + 1], answerIds[1]);
    answerIds[1].parentNode.insertBefore(answers[nextAnswerIndex], answerIds[1]);
  }
})
