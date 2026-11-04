function getLetterGrade(score)
{
    if(score >=90)
    {
        return 'A';
    }
    else if(score>=80 && score<90)
    {
        return 'B';
    }
    else if (score>=70 && score<80)
    {
        return 'C';
    }
    else if (score>=60 && score<70)
    {
        return 'D';
    }
    else 
        return 'F';
}

function hasPassed(score)
{
    if (score >=60)
        return true;
}

function getFeedback(grade)
{
    if (grade == 'A')
        return 'Outstanding';
    else if (grade == 'B')
        return 'Excellent';
    else if (grade == 'C')
        return 'Good';
    else if (grade == 'D')
        return 'Need improvement';
    else 
        return 'Fail';
}
function createGradeReport(name, score)
{
    const grade =getLetterGrade(score);
    const passed =hasPassed(score);
    const feedback=getFeedback(grade);
    return {
        name,
        score,
        grade,
        passed,
        feedback
    }
}

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));