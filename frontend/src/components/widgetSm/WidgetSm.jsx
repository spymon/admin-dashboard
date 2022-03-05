import { Visibility } from '@material-ui/icons'
import './widgetSm.css'

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1872090/pexels-photo-1872090.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="avatar"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmButtonIco" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1872090/pexels-photo-1872090.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="avatar"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmButtonIco" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1872090/pexels-photo-1872090.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="avatar"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmButtonIco" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1872090/pexels-photo-1872090.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="avatar"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmButtonIco" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1872090/pexels-photo-1872090.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="avatar"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmButtonIco" /> Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
