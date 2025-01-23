export const ERROR_MESSAGES = {
    USER_NOT_FOUND: (id: number) => `Usuário com ID ${id} não encontrado na base de dados.`,
    INVALID_REQUEST: 'Requisição inválida. Verifique os dados enviados.',
    INVALID_ID: 'O ID deve ser um número positivo.',
    EMAIL_IN_USE: 'Este email de usuário já existe.',
    USER_ALREADY_EXISTS: 'Este usuário já existe.',
    MISSING_NAME: 'Campo nome é obrigatório.',
    MISSING_EMAIL: 'Campo email é obrigatório.',
    EMAIL_IN_USE_UPDATE: 'Não é possível atualizar este email, ele já existe.',
    NO_CHANGES: 'Nenhuma alteração válida foi enviada para atualização.', 
    SERVER_ERROR: 'Erro interno no servidor.',
  };
  
  