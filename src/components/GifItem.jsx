export const GifItem = ({title, url, id}) => {
  return (
    <div className="card">
    <img src={url} alt={title} height="200" width="50"/>
    <p>{title}</p>
    </div>
  )
}
