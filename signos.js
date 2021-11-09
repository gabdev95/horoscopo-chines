function carregar() {
    var fano = document.getElementById('txtano')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var res = Number(fano.value)%12
    msg.innerHTML = `O signo que rege o ano de ${fano.value} é : `
    var txtsigno = document.getElementById('txtsigno')
    var animal = document.getElementById('animal')

    //Os textos de cada signo foram retirados da página personare. O link: https://www.personare.com.br/conteudo/signos-chineses-m35192
    //O formulação desse site foi única e exclusivamente para estudo.
    
    
    if (res == 0) {
        animal.innerHTML = 'O Macaco'
        img.src = "/img/macaco.jpeg"
        txtsigno.innerHTML = 'É o signo do inventor, tem facilidade de improvisar quando algum desafio se apresenta, e sabe usar recursos inovadores pela sua habilidade natural. Atenção para comunicar e apresentar aos outros suas resoluções e o modo como considerou realizar sua tarefa.'
    } else if (res == 1){
        animal.innerHTML = 'O Galo'
        img.src = '/img/galo.jpeg'
        txtsigno.innerHTML = 'Pela sua altivez marcada em seu território, aparenta ser o herói impávido. Precisa se sentir seguro no seu domínio de território. Denota confiança, a atenção é para não exceder nesse papel e se tornar agressivo.'
    } else if (res == 2){
        animal.innerHTML = 'O Cachorro'
        img.src = '/img/cachorro.jpeg'
        txtsigno.innerHTML = 'A lealdade é muito aparente, mantém na maioria das vezes a constância em suas ações. Pode ser compreensivo na maioria das vezes. De um modo geral, no Horóscopo Chinês, sua atenção precisará dar conta para não ser quando atacado no seu terreno.'
    } else if (res == 3){
        animal.innerHTML = 'O Javali'
        img.src = '/img/javali.jpeg'
        txtsigno.innerHTML = 'É um signo de honestidade e simplicidade, a força moral se torna parte considerável em suas condutas. É dedicado em sua tarefa designada e cumpre até o fim. A atenção é para que a ingenuidade não limite suas percepções.'
    } else if (res == 4){
        animal.innerHTML = 'O Rato'
        img.src = '/img/rato.jpeg'
        txtsigno.innerHTML = 'Curioso por natureza, hábil por enfrentar desafios e dificuldades que surgem no caminho. Poderá ser franco e honesto. De acordo com o Horóscopo Chinês, a atenção é para a crítica exagerada de si mesmo e dos outros em questão.'
    } else if (res == 5){
        animal.innerHTML = 'O Búfalo'
        img.src = '/img/bufalo.jpeg'
        txtsigno.innerHTML = 'Age na maioria das vezes com calma e bom senso. Geralmente é conservador, e busca naturalmente ser independente, tem facilidade em aceitar os outros pelo que são. Pela sua constância e ação mais lenta, a atenção é para que não deixe as oportunidades passarem.'
    } else if (res == 6){
        animal.innerHTML = 'O Tigre'
        img.src = '/img/tigre.jpeg'
        txtsigno.innerHTML = 'O nativo de tigre apresenta um dinamismo excepcional em suas ações, seu vigor é estimulante e ainda é cativante quando está determinado a conseguir alguma coisa. A atenção é para que não exceda em sua determinação agindo com impulso e agressividade.'
    } else if (res == 7){
        animal.innerHTML = 'O Coelho'
        img.src = '/img/coelho.jpeg'
        txtsigno.innerHTML = 'Considerado um dos mais afortunados do Horóscopo Chinês, tem a graciosidade natural na sua conduta e modo de ação, traz na maioria das vezes um julgamento sensato das coisas mais cotidianas, por isso a diplomacia é evidente. Atenção é para que o exagero de autoconfiança não impeça de ver outros pontos de vista.'
    } else if (res == 8){
        animal.innerHTML = 'O Dragão'
        img.src = '/img/dragao.jpeg'
        txtsigno.innerHTML = 'Muita vitalidade, tem a forma de viver mais extravagante e se coloca com certa altivez nos processos ordinários. A atenção é para que não subestime pessoas que estão ao seu redor agindo de forma rude.'
    } else if (res == 9){
        animal.innerHTML = 'A Serpente'
        img.src = '/img/serpente.jpeg'
        txtsigno.innerHTML = 'É o signo do filósofo. Com sua astúcia, o nativo de Serpente é um pensador profundo. Tem a sabedoria inata, e conserva sua presença de espírito. A atenção é no relacionamento com os outros e para usar essa sabedoria para não ser muito exigente.'
    } else if (res == 10){
        animal.innerHTML = 'O Cavalo'
        img.src = '/img/cavalo.jpeg'
        txtsigno.innerHTML = 'Conforme o Horóscopo Chinês, a aventura o empolga a viver com mais liberdade e prazer. Por vezes, pode parecer egocêntrico pelas suas escolhas e pela sua autoconfiança em agir de acordo com suas inclinações. Atenção será em respeitar o tempo do outro, pois tende a apressar as pessoas.'
    } else if (res == 11){
        animal.innerHTML = 'O Carneiro'
        img.src = '/img/carneiro.jpeg'
        txtsigno.innerHTML = 'Se apresenta com integridade, sinceridade e emoção. Consegue o que quer sem recorrer à força, sua atenção é para que não se deixe facilmente ser dominado por suas emoções, e equilibrar a razão em suas atitudes e respostas.'
    } 

}
