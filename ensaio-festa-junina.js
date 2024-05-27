/** 
 * criar os objetos do ensaio
*/

/** 
 * 
 * Apolônio 3
 * Gregório 1
 * Rodrigo 2
 * Natalia 7
 * Aleciane 12
 * Erik 1
 * Rayssa 4
 * 
 * */
var pessoa = [];
pessoa[1] = new Pessoa(rock_and_roll, sheipado, 17, branco, otimo, 1.70, perfeicao, Gregorio, 2007, 3, 25, fabiano, rita );
pessoa[2] = new Pessoa(jazz, longo, 18, preto, bom, 1.75, perfeicao, Enzo, 2006, 5, 15, fabio, rafaela);
pessoa[3] = new Pessoa(pagode, gordo, 13, preto, ruim, 1.80, perfeicao, Maria, 2008, 12, 10, lucas, gabriela);
pessoa[4] = new Pessoa(pop, raspado, 20, amarelo, excelente, 1.80, perfeicao, Lucas, 2005, 7, 3, pedro, juliana);
pessoa[5] = new Pessoa(clássico, curto, 25, castanho, ótimo, 1.65, perfeicao, Sofia, 2002, 9, 20, thiago, ana);
pessoa[6] = new Pessoa(samba, afro, 30, branco, péssimo, 1.90, perfeicao, André, 1999, 11, 5, marcos, carla);
pessoa[7] = new Pessoa(rock, moicano, 22, ruivo, regular, 1.80, perfeicao, Julia, 2004, 8, 12, vinicius, mariana);
pessoa[8] = new Pessoa(eletrônico, trançado, 19, loiro, bom, 1.70, perfeicao, Matheus, 2003, 6, 30, felipe, luana);
pessoa[9] = new Pessoa(metal, careca, 27, preto, excelente, 1.85, perfeicao, Carolina, 2001, 4, 18, joão, bianca);
pessoa[10] = new Pessoa(reggae, black-power, 23, negro, bom, 1.75, perfeicao, Rafael, 2000, 10, 8, bruno, larissa);
pessoa[11] = new Pessoa(sertanejo, comprido, 21, loiro, regular, 1.80, perfeicao, Fernanda, 1998, 2, 28, marcelo, julia);
pessoa[12] = new Pessoa(hip-hop, undercut, 24, castanho, regular, 1.85, perfeicao, Vanessa, 1997, 1, 1, pedro, renata);
pessoa[13] = new Pessoa(funk, curto, 28, preto, péssimo, 1.60, perfeicao, Andréia, 1996, 3, 10, lucas, gabriela);
pessoa[14] = new Pessoa(blues, cacheado, 26, ruivo, bom, 1.75, perfeicao, Carlos, 1995, 7, 20, thiago, ana);
pessoa[15] = new Pessoa(indie, liso, 29, castanho, ótimo, 1.68, perfeicao, Mariana, 1994, 5, 5, rafael, camila);
pessoa[16] = new Pessoa(pop-rock, tranças, 31, negro, excelente, 1.78, perfeicao, Larissa, 1993, 9, 15, pedro, juliana);


var musica = [];
musica[0] = new Musica(parametro1, parametro2);
musica[1] = new Musica(parametro1, parametro2);
var ritmo = [];
ritmo[0] = new Ritmo(parametro1, parametro2);
ritmo[1] = new Ritmo(parametro1, parametro2 );
var local_do_ensaio = [];
local_do_ensaio[0] = new LocalDoEnsaio(parametro1, parametro2, etc);
local_do_ensaio[1] = new LocalDoEnsaio(parametro1, parametro2, etc);
var banheiro = [];
banheiro[0] = new Banheiro(parametro1, parametro2, );
banheiro[1] = new Banheiro(parametro1, parametro2);



class Pessoas {
    constructor (musicalidade, corpo, idade, peso, cor, coordenacao_motora, altura, ritmo, nome, ano_nascimento, mes_nascimento, dia_nascimento, nome_pai, nome_mae, rg, cpf, endereco, numero_endereco, bairro, cidade, estado, cep, whatsapp, facebook, instagram, twiter_x, linkedin, email, tiktok, youtube, snapchat, orkut, tinder, uber, app_99, profissao, nacionalidade, estado_civil, possui_deficiencia, cnh, passaporte, religiao, partido_politico, idioma, figurino, ) {
        this.musicalidade = musicalidade;
        this.corpo = corpo;
        this.idade = idade;
        this.peso = peso;
        this.cor = cor;
        this.coordenacao_motora = coordenacao_motora;
        this.altura = altura;
        this.ritmo = ritmo;
        this.nome = nome;
        this.ano_nascimento = ano_nascimento;
        this.mes_nascimento = mes_nascimento;
        this.dia_nascimento = dia_nascimento;
        this.nome_pai = nome_pai;
        this.nome_mae = nome_mae;
        this.rg = rg;
        this.endereco = endereco;
        this.numero_endereco = numero_endereco;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.whatsapp = whatsapp;
        this.facebook = facebook;
        this.instagram = instagram;
        this.twitter_x = twiter_x;
        this.linkedin = linkedin;
        this.email = email;
        this.tiktok = tiktok;
        this.youtube = youtube;
        this.snapchat = snapchat;
        this.orkut = orkut;
        this.tinder = tinder;
        this.uber = uber;
        this.app_99 = app_99;
        this.profissao = profissao;
        this.nacionalidade = nacionalidade;
        this.estado_civil = estado_civil
        this.possui_deficiencia = possui_deficiencia;
        this.cnh = cnh;
        this.passaporte = passaporte;   
        this.religiao = religiao;
        this.partido_politico = partido_politico;
        this.idioma = idioma;
        this.figurino = figurino;
    }
}

class Musica {
    constructor (ritmo, velocidade, compasso, artista, nome, ano, tempo, idioma, tipo, genero, autor, compositor, musica, letra, instrumentos, volume, vocalista, baterista, guitarrista, baixista, sonoplasta) {

    }
}

class Ritmo {
    constructor (movimento, tempo, velocidade, som, compasso, coreografia, nome, quantidade_de_pessoas, musica, bpm, sincronia, harmonia, vestimentas, genero_musical, maquiagens, equipamentos, local_de_ensaio, melodia, composicao, compositor, instrumentos) {
        // Ação ...
    }
}

class LocalDoEnsaio {
    constructor (espaco, largura, altura, profundidade, energia, som, musica, microfone, palco, cadeira, capacidade_de_pessoas, equipamentos_de_luz, internet, cabo_de_energia, apresentacoes, stands, disponibilidade, seguranca, horario_de_funcionamento, acessibilidade, publico, artistas, janela, porta, camarim, comida, sala_de_descanso, escadas, ) {

    }
}

class Banheiro {
    constructor (genero, produtos, torneira, piz, vaso, piso, agua, energia, espelho, toalha_de_papel, suporte_de_sabonete, sabonete, suporte_de_bolsa, lixeira, descarga, mictorio, encanamento, odorizante, lampada, porta, interruptor, sensor_de_luz, janela, macaneta, batente) {

    }
}

/**
 *         this.musicalidade = musicalidade;
        this.corpo = corpo;
        this.idade = idade;
        this.peso = peso;
        this.cor = cor;
        this.coordenacao_motora = coordenacao_motora;
        this.altura = altura;
        this.ritmo = ritmo;
        this.nome = nome;
        this.ano_nascimento = ano_nascimento;
        this.mes_nascimento = mes_nascimento;
        this.dia_nascimento = dia_nascimento;
        this.nome_pai = nome_pai;
        this.nome_mae = nome_mae;
        this.rg = rg;
        this.endereco = endereco;
        this.numero_endereco = numero_endereco;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;

 */