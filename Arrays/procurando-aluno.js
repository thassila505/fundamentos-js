const alunos = ["João", "Juliana", "Ana", "Caio"];

const medias = [10, 8, 7.5, 9];

const listasDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listasDeAlunosEMedias[0].includes(aluno)){
         const [alunos, medias] = listasDeAlunosEMedias;

        const indice = alunos.index0f(aluno);

        const mediaDoAlunon= medias[indice];

        console.log(`${aluno} tem média ${mediaDoAluno}.`);
    }else{
        console.log(`Aluno não cadastrado`);

    }
    
}

exibeNomeENota("Ana");