import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import "./base.scss";
import Icon from './icon.png';

function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack', '2019'], ' ');
  element.classList.add('hello');

  //
  btn.innerHTML = '点击这里，然后查看 console！';
  btn.onclick = printMe;
  element.appendChild(btn);

  // 将图像添加到我们已经存在的 div 中。
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());