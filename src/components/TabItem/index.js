// Write your code here
import './index.css'

const TabItem = props => {
  const {mytabList, isActive, mytabActive} = props
  const {tabId, displayText} = mytabList
  const tabActive = () => {
    mytabActive(tabId)
  }
  const activeTAb = isActive ? 'active' : ''
  console.log(tabId)
  return (
    <li>
      <button
        onClick={tabActive}
        type="button"
        className={`mytab_btn ${activeTAb}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
