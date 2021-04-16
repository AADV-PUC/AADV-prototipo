const noticias = ()=>   { location.assign('../screens/noticias.html'); }

const atividades = ()=> { location.assign('../screens/atividades.html'); }
    const todasAtividades = ()=> { location.assign('../screens/todasAtividades.html'); }

const mensagens = ()=>  { location.assign('../screens/mensagens.html'); }
    const mensagensAcima = ()=>  { location.assign('../screens/mensagensAcima.html'); }
        const mensagensLeitura = ()=>  { location.assign('../screens/mensagensLeitura.html'); }

const sosVoluntarios = ()=> { location.assign('../screens/sosVoluntarios.html'); }

const desativado = ()=> { alert('botão desativado, tente outra opção'); }

const voltar = (e) => {
    e === 'inicial' ? location.assign('../screens/index.html') :
    e === 'mensagens' ? location.assign('../screens/mensagens.html') :
    e === 'mensagensAcima' ? location.assign('../screens/mensagensAcima.html') :
    e === 'atividades' ? location.assign('../screens/atividades.html') : e;
}