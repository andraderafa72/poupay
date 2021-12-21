import { useLang } from '../../../../../hooks/useLang';

import bank from '../assets/bank.svg';
import id from '../assets/id.svg';
import file from '../assets/file.svg';
import sino from '../assets/sino.svg';
import chart from '../assets/chart.svg';
import target from '../assets/target.svg';

import { List } from './styles';

export function LeftList() {
  const { TextContent } = useLang();
  return (
    <List>
      <li>
        <div className="content">
          <strong>{TextContent.pages?.Home.Recursos.left[0].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.left[0].subtitle}</p>
        </div>
        <img src={bank} alt="" />
      </li>
      <li>
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.left[1].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.left[1].subtitle}</p>
        </div>
        <img src={id} alt="" />
      </li>
      <li>
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.left[2].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.left[2].subtitle}</p>
        </div>
        <img src={file} alt="" />
      </li>
      <li>
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.left[3].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.left[3].subtitle}</p>
        </div>
        <img src={sino} alt="" />
      </li>
      <li>
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.left[4].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.left[4].subtitle}</p>
        </div>
        <img src={target} alt="" />
      </li>
      <li>
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.left[5].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.left[5].subtitle}</p>
        </div>
        <img src={chart} alt="" />
      </li>
    </List>
  )
}