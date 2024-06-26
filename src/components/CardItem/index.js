import './index.css'

const TechComp = props => {
  const {eachList} = props
  const {title, description, imgUrl, className} = eachList
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechComp
