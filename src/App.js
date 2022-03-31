import { useDispatch, useSelector } from 'react-redux';
import { faHeart, faTrashCan, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from 'antd';
import 'antd/dist/antd.min.css';
import './App.css';

function App() {

const dispatch = useDispatch();
const images = useSelector(state => state);
const changeLike = (id) => {
  dispatch({type: "LIKE", id: id });
};

const deleteItem = (id) => {
  dispatch({type: "DELETE", id: id });
};

const hideImage = () => {
  dispatch({type: "HIDE"});
};

const showImage = () => {
  dispatch({type: "SHOW"});
};

let classNames = require('classnames');

return (
    <div className='App'>
      <div className='App-header'>
        <div style={{textAlign: 'center'}}>
          <Tooltip placement="right" title="Show only liked images">
            <button onMouseUp={() => hideImage()} onMouseDown={() => showImage()}>
              Filter
            <FontAwesomeIcon icon={faFilter} className="app-filter-icon"/>
            </button>
          </Tooltip>
        </div> 
       {images.map(item => 
        <div className={classNames('app-div-content', {'app-div-hide': !item.show})}>
         <img
            src={item.link} 
            className={classNames( 'app-div-img', {'app-div-like': item.like})}
         />
          <span style={{display: 'block'}}>This picture is number {images.indexOf(item) + 1}</span>
          <Tooltip placement="bottom" title="put likes">
            <FontAwesomeIcon 
              onClick={() => changeLike(images.indexOf(item))} 
              icon={faHeart} 
              className={classNames( 'app-icon-like', {'app-icon-like-down': item.like} )}
            />
          </Tooltip>
          <Tooltip placement="bottom" title="delete image">
            <FontAwesomeIcon 
            icon={faTrashCan} 
            onClick={() => deleteItem(images.indexOf(item))}
            className="app-icon-trash"
          />
          </Tooltip>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
