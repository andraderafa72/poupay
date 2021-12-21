import icon from '../assets/icon.svg';
import { List } from './styles';

import sos from '../assets/sos.svg';
import transactions from '../assets/file.svg';
import switchImg from '../assets/switch.svg';
import chart from '../assets/chart-up.svg';
import { useLang } from '../../../../../hooks/useLang';


export function RightList() {
  const { TextContent } = useLang();

  return (
    <List>
      <li>
        <img src={sos} alt="" />
        <div className="content">
          <strong>{TextContent.pages?.Home.Recursos.right[0].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.right[0].subtitle}</p>
        </div>
      </li>
      <li>
        <img src={transactions} alt="" />
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.right[1].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.right[1].subtitle}</p>
        </div>
      </li>
      <li>
        <img src={switchImg} alt="" />
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.right[2].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.right[2].subtitle}</p>
        </div>
      </li>
      <li>
        <img src={chart} alt="" />
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.right[3].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.right[3].subtitle}</p>
        </div>
      </li>
      <li>
        <img src={icon} alt="" />
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.right[4].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.right[4].subtitle}</p>
        </div>
      </li>
    </List>
  )
}