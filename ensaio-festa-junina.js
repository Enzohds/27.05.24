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
musica[1] = new Musica("rock", "Let It Be", "The Beatles", "Rock", 1969);
musica[2] = new Musica("jazz", "Take Five", "Dave Brubeck Quartet", "Jazz", 1959);
musica[3] = new Musica("pop", "Thriller", "Michael Jackson", "Pop", 1982);
musica[4] = new Musica("blues", "Stairway to Heaven", "Led Zeppelin", "Blues Rock", 1971);
musica[5] = new Musica("reggae", "No Woman, No Cry", "Bob Marley", "Reggae", 1974);
musica[6] = new Musica("hip-hop", "Lose Yourself", "Eminem", "Hip-Hop", 2002);
musica[7] = new Musica("country", "Ring of Fire", "Johnny Cash", "Country", 1963);
musica[8] = new Musica("samba", "Aquarela do Brasil", "Ary Barroso", "Samba", 1939);
musica[9] = new Musica("classical", "Symphony No. 9", "Ludwig van Beethoven", "Classical", 1824);
musica[10] = new Musica("metal", "Master of Puppets", "Metallica", "Heavy Metal", 1986);
musica[11] = new Musica("folk", "The Times They Are a-Changin'", "Bob Dylan", "Folk", 1964);
musica[12] = new Musica("electronic", "Around the World", "Daft Punk", "Electronic", 1997);
musica[13] = new Musica("punk", "London Calling", "The Clash", "Punk Rock", 1979);
musica[14] = new Musica("r&b", "I Heard It Through the Grapevine", "Marvin Gaye", "Rhythm and Blues", 1968);
musica[15] = new Musica("latin", "La Bamba", "Ritchie Valens", "Latin", 1958);
musica[16] = new Musica("disco", "Stayin' Alive", "Bee Gees", "Disco", 1977);

var ritmo = [];
ritmo[1] = new Ritmo("Salsa", "Caribenho");
ritmo[2] = new Ritmo("Funk", "Brasileiro");
ritmo[3] = new Ritmo("Hip-Hop", "Americano");
ritmo[4] = new Ritmo("Flamenco", "Espanhol");
ritmo[5] = new Ritmo("K-Pop", "Coreano");
ritmo[6] = new Ritmo("Samba", "Brasileiro");
ritmo[7] = new Ritmo("Reggaeton", "Latino");
ritmo[8] = new Ritmo("Jazz", "Americano");
ritmo[9] = new Ritmo("Bollywood", "Indian");
ritmo[10] = new Ritmo("Afrobeat", "Africano");

var local_do_ensaio = [];
local_do_ensaio[1] = new LocalDoEnsaio("Estúdio XYZ", "Rua A, 123", "Cidade A", "Estado A");
local_do_ensaio[2] = new LocalDoEnsaio("Sala de ensaio ABC", "Avenida B, 456", "Cidade B", "Estado B");
local_do_ensaio[3] = new LocalDoEnsaio("Espaço de música 123", "Rua C, 789", "Cidade C", "Estado C");
local_do_ensaio[4] = new LocalDoEnsaio("Estúdio 789", "Rua D, 456", "Cidade D", "Estado D");
local_do_ensaio[5] = new LocalDoEnsaio("Sala de ensaio DEF", "Avenida E, 123", "Cidade E", "Estado E");
local_do_ensaio[6] = new LocalDoEnsaio("Espaço musical 456", "Rua F, 789", "Cidade F", "Estado F");
local_do_ensaio[7] = new LocalDoEnsaio("Estúdio GHI", "Avenida G, 456", "Cidade G", "Estado G");
local_do_ensaio[8] = new LocalDoEnsaio("Sala de ensaio GHI", "Rua H, 123", "Cidade H", "Estado H");
local_do_ensaio[9] = new LocalDoEnsaio("Espaço de música JKL", "Avenida I, 789", "Cidade I", "Estado I");
local_do_ensaio[10] = new LocalDoEnsaio("Estúdio MNO", "Rua J, 456", "Cidade J", "Estado J");

var banheiro = [];
banheiro[1] = new Banheiro("Banheiro 1", "Corredor A", 2, "azulejos brancos", "pia de mármore", true, ["toalhas", "sabonete líquido"]);
banheiro[2] = new Banheiro("Banheiro 2", "Corredor B", 3, "azulejos azuis", "pia de granito", false, ["papel higiênico", "sabonete em barra"]);
banheiro[3] = new Banheiro("Banheiro 3", "Corredor C", 1, "azulejos vermelhos", "pia de porcelana", true, ["toalhas de papel", "desinfetante"]);
banheiro[4] = new Banheiro("Banheiro 4", "Corredor D", 2, "azulejos verdes", "pia de plástico", false, ["papel toalha", "saboneteira"]);
banheiro[5] = new Banheiro("Banheiro 5", "Corredor E", 3, "azulejos amarelos", "pia de alumínio", true, ["lenços umedecidos", "álcool em gel"]);
banheiro[6] = new Banheiro("Banheiro 6", "Corredor F", 1, "azulejos roxos", "pia de vidro", false, ["perfume", "hidratante"]);
banheiro[7] = new Banheiro("Banheiro 7", "Corredor G", 2, "azulejos brancos", "pia de mármore", true, ["toalhas", "sabonete líquido"]);
banheiro[8] = new Banheiro("Banheiro 8", "Corredor H", 3, "azulejos azuis", "pia de granito", false, ["papel higiênico", "sabonete em barra"]);



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
