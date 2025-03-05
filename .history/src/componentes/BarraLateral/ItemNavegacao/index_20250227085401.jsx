const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
  return (
    <>
      <img src={ativo ? iconeAtivo : iconeInativo } alt="" />
      {children}
    </>
  )
}

export default ItemNavegacao