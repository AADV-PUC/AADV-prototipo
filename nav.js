const noticias = ()=>   { location.assign('noticias.html'); }

const atividades = ()=> { location.assign('atividades.html'); }
    const todasAtividades = ()=> { location.assign('todasAtividades.html'); }

const mensagens = ()=>  { location.assign('mensagens.html'); }
    const mensagensAcima = ()=>  { location.assign('mensagensAcima.html'); }
        const mensagensLeitura = ()=>  { location.assign('mensagensLeitura.html'); }

const sosVoluntarios = ()=> { location.assign('sosVoluntarios.html'); }

const desativado = ()=> { alert('botão desativado, tente outra opção'); }

const voltar = (e) => {
    e === 'inicial' ? location.assign('index.html') :
    e === 'mensagens' ? location.assign('mensagens.html') :
    e === 'mensagensAcima' ? location.assign('mensagensAcima.html') :
    e === 'atividades' ? location.assign('atividades.html') : e;
}