import {useState} from 'react';
import './App.css';

const bgColors = ["#BBA0B2", "#9D858D", "#A4A8D1", "#A4BFEB", "#8CABBE", "#E36588", "#9A275A"]

const Pimple = ({depth}) => {
   const [isExpanded, setExpanded] = useState(false);

   return isExpanded && depth <= 5
     ? <div className="pimple-set">
         <Pimple depth={depth+1}/>
         <Pimple depth={depth+1}/>
         <Pimple depth={depth+1}/>
         <Pimple depth={depth+1}/>
        </div>
     : <div className="pimple" onMouseEnter={() => {setExpanded(true)}} style={{backgroundColor: bgColors[depth]}}></div>
}

export default Pimple;
