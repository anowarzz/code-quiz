export const quizCardLoader = async () => {

    const quizCardData = await fetch('https://openapi.programming-hero.com/api/quiz')
   
    const quizCards = await quizCardData.json();
    console.log(quizCards);
    return quizCards ;

}