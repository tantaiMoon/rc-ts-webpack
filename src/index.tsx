import * as React from 'react';
import * as ReactDOM from 'react-dom';

let root: HTMLElement | null = document.getElementById('root');
interface IProps {
  className: 'title'
}
// 组件的属性类型
let props: IProps = { className: 'title' };

function WelCome(props: IProps): React.DetailedReactHTMLElement<IProps, HTMLDivElement> {
  return React.createElement<IProps, HTMLDivElement>('div', props, 'hello! welcome react+ts')
}
let elFn: React.FunctionComponentElement<IProps> = React.createElement(WelCome, props);
// 类组件的状态类型
interface IState {
  count: number,
}

class WelComeClass extends React.Component<IProps, IState>{
  render() {
    return React.createElement<IProps, HTMLDivElement>('div', props, 'hello! welcome react component + ts');
  }
}
let elC = React.createElement(WelComeClass, props);


// React.DetailedReactHTMLElement<IProps, HTMLDivElement> 详细的react元素类型
let el: React.DetailedReactHTMLElement<IProps, HTMLDivElement> = React.createElement<IProps, HTMLDivElement>('div', props, 'hello! react+ts+webpack travis-ci');
ReactDOM.render(
  <>
    {el}<WelCome className='title' /><WelComeClass className='title' />
  </>,
  root
);

