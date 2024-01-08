// Write your code here
import './index.css'

const AppItem = props => {
  const {myappList} = props
  const {appName, imageUrl, category} = myappList
  console.log(category)

  return (
    <li className="app_container_list">
      <img className="app_image" src={imageUrl} alt={appName} />
      <p className="app_name">{appName}</p>
    </li>
  )
}

export default AppItem
