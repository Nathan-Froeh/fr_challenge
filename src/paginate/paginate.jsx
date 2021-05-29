import "./paginate.css"

export function Paginate({pagination, pageChange}) {

  const handlePageChange = (e) => {
    let page = Number(pagination['page-number'])
    pageChange(page + e)
  }

  // const init = () => {
  //   console.log('pagination', pagination)
  // }
  // init();
  return(
    <div className="paginate">

      <button onClick={() => handlePageChange(-1)} disabled={pagination["page-number"] <= 1}>Prev</button>

      <p>Page {pagination['page-number']} of {pagination['total-pages']}</p>

      <button onClick={() => handlePageChange(1)} disabled={pagination["page-number"] >= pagination["total-pages"]}>Next</button>
      
    </div>

  )
}