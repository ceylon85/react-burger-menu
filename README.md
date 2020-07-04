# 사이드 바를 사용하여 햄버거 메뉴 만들기
Link to [Demo](https://ceylon85.github.io/react-burger-menu)

## 프로젝트 생성 (project name: burger-menu)
```
npx create-react-app burger-menu
``` 
## 기본 스타일 추가
#### styled-components 추가  
```
yarn add styled-components
```
#### 기본 스타일인 `global.js` 생성
src/global.js 생성

#### 모든 변수를 보유하는 `theme` 파일 추가
`tutorial`에 맞춰 다크 테마로!   
src/theme.js 생성

## 레이아웃, 메뉴 및 버거 components 추가
#### `App.js`에서 기본 템플릿 생성
- burger img 출처 기록   
  
#### `ThemeProvider`로 `Globalstyles`을 감쌌기 때문에 theme props을 전역에서 사용 가능  
- 매번 `props.theme`를 사용하는 대신 대괄호를 사용하여 `theme`를 사용
   
#### `global.js`에 있는 속성 변경   

Before
```js
background: #0D0C1D;
color: #EFFFFA;
```
After
```js
background: ${({ theme }) => theme.primaryDark};
color: ${({ theme }) => theme.primaryLight};
```
## `Burger`와 `Menu` components 생성

#### src/components 폴더를 만들고 내부에 Burger & Menu 폴더와 index.js 파일 생성   
- index.js 의 목적: 하나의 파일에서 컴포넌트를 가져올 수 있게 한다.

#### Burger폴더에서 하는 일 
- 레이아웃을 위해 Burger.js 생성 
- 스타일을 포함 할 Burger.styled.js 추가 
- 파일을 내보내는 index.js를 추가
- Burger.js의 레이아웃을 추가

#### Menu 폴더도 위와 동일하게 진행
- 레이아웃을 위해 Menu.js 생성  
- 스타일을 포함 할 Menu.styled.js 추가 
- 파일을 내보내는 index.js를 추가
- Menu.js의 레이아웃을 추가

#### App.js 에 새 Component를 import

## `Open` 및 `Close` 기능 추가
- 버거 아이콘을 클릭하면 sidebar가 열리는 기능을 위해 
Hook에 있는 useState를 사용   

- App.js 에 state를 만들고 기본값을 false로 한다.
(어플리케이션이 렌더링 될 때 메뉴가 숨겨져야 하므로 false로 지정)

- state를 받으려면 toggle과 sidebar 메뉴가 필요하므로 각 컴포넌트에 props로 전달한다.   
  
App.js
```JS
<Burger open={open} setOpen={setOpen} />
<Menu open={open} setOpen={setOpen} />
```

## `components` 에 `props` 전달   
#### Burger.js에서 props 처리
`StyledBurger` 의 props에 open 과 `onClick` 핸들러를 추가하여 setOpen func를 호출   

Burger.js
```JS
<StyledBurger open={open} onClick={() => setOpen(!open)}>
```
#### Menu.js 에 open props 전달
Menu.js
```JS
<StyledMenu open={open}>
```
#### Menu.styled.js 에 `transform` 속성을 추가하여 닫기 기능 활성화
Menu.styled.js
```JS
transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
```
# 
### Menu icon animation   
Burger.styled.js
```JS
:first-child {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

:nth-child(2) {
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  ```

## Hook 추가
- 페이지의 다른 곳을 클릭해도 메뉴를 닫게 하는 기능 추가
#### React Hook을 추가, hook.js 생성
- ref(react Ref)를 사용, 클릭한 요소의 확인과 누군가 페이지를 클릭할 때도 확인한다.

```JS
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};
```
- useEffect hook을 사용하여 함수를 반환
(componentWillUnmount 의 LifeCycle 을 대체)

## Hook 연결
App.js
```JS
import React, {useState, useRef} from 'react';
import { useOnClickOutside } from './hooks';
```

- useRef()는 node 라는 이름을 사용하여 변수의 요점을 반영
- 첫번째 인수로 node를 전달, 두번째 인수로 메뉴닫는 함수를 전달   

App.js
```JS
const node = useRef(); 
useOnClickOutside(node, () => setOpen(false));
```

- DOM에 ref를 전달한다. Burger와 Menu 를 가지고 있는 div에 ref를 전달
```JS
<div ref={node}>
  <Burger open={open} setOpen={setOpen} />
  <Menu open={open} setOpen={setOpen} />
</div>
```

## Issue
#### Minified React error #152 발생 
- 문제: dev 버전은 앱이 나오지만, deploy하기 위해 build 된 버전은 앱이 비어서 나옴
- 해결: facebook github에서 주석을 제거하라고 하여 JSX의 return문에 있는 주석을 제거하니 정상 작동   
  
# 
Link to 
[Tutorial](https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/)
