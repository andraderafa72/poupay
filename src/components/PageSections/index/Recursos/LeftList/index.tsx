import { useLang } from '../../../../../hooks/useLang';
import icon from '../assets/icon.svg';
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
        <img src={icon} alt="" />
      </li>
      <li>
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.left[1].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.left[1].subtitle}</p>
        </div>
        <img src={icon} alt="" />
      </li>
      <li>
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.left[2].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.left[2].subtitle}</p>
        </div>
        <img src={icon} alt="" />
      </li>
      <li>
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.left[3].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.left[3].subtitle}</p>
        </div>
        <img src={icon} alt="" />
      </li>
      <li>
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.left[4].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.left[4].subtitle}</p>
        </div>
        <img src={icon} alt="" />
      </li>
      <li>
        <div className="content">
        <strong>{TextContent.pages?.Home.Recursos.left[5].title}</strong>
          <p>{TextContent.pages?.Home.Recursos.left[5].subtitle}</p>
        </div>
        <img src={icon} alt="" />
      </li>
    </List>
  )
}