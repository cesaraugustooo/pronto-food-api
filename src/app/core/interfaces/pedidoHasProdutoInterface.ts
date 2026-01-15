
export interface pedidoHasProduto {
    id?: string
    produto_id: string,
    pedido_id?: string,
    nome_snapshot: string,
    preco_snapshot: number
    createdAt?: Date
}

export interface createInterface {
    data: string[],
    empresa_id: string,
    pedido_id: string
}