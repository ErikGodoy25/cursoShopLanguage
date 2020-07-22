import moment from 'moment';
import usuario from './../model/usuario';

async function pesquisarTodosUsuarios() {
    return await usuario.findAll();
}

async function pesquisarUsuario(id) {
    return await usuario.findByPk(id);
}

async function incluirUsuario(novoUsuario) {
    novoUsuario['data_inclusao_usuario'] = moment.utc().local().toDate();
    return await usuario.create(novoUsuario);
} //Não está gravando a data na inclusão

async function editarUsuario(alteraUsuario, id) {
    await usuario.update(alteraUsuario, { where: { id_usuario: id } })
    return await usuario.findByPk(id);
}

async function deletarUsuario(id) {
    await usuario.destroy({ where: { id_usuario: id } })
}

const service = {
    pesquisarTodosUsuarios: () => pesquisarTodosUsuarios(),
    pesquisarUsuario: (id) => pesquisarUsuario(id),
    incluirUsuario: (novoUsuario) => incluirUsuario(novoUsuario),
    editarUsuario: (alteraUsuario, id) => editarUsuario(alteraUsuario, id),
    deletarUsuario: (id) => deletarUsuario(id)
}

export default service