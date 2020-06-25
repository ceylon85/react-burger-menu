# `사이드 바를 사용하여 햄버거 메뉴 만들기`

## `프로젝트 생성` (project name: burger-menu)
```
npx create-react-app burger-menu
``` 
## `기본 스타일 추가`
#### styled-components 추가  
```
yarn add styled-components
```
#### 기본 스타일인 `global.js` 생성
src/global.js 생성

#### 모든 변수를 보유하는 `theme` 파일 추가
`tutorial`에 맞춰 다크 테마로!   
src/theme.js 생성

## `레이아웃, 메뉴 및 버거 components 추가`
#### `App.js`에서 기본 템플릿 생성
- burger img 출처 기록   
  
#### `ThemeProvider`로 `Globalstyles`을 감쌌기 때문에 theme props을 전역에서 사용 가능  
- 매번 `props.theme`를 사용하는 대신 대괄호를 사용하여 `theme`를 사용
   
#### `global.js`에 있는 속성 변경   

`Before`
```js
background: #0D0C1D;
color: #EFFFFA;
```
`After`
```js
background: ${({ theme }) => theme.primaryDark};
color: ${({ theme }) => theme.primaryLight};
```
## `Burger`와 `Menu` components 생성

#### src/components 폴더를 만들고 내부에 Burger & Menu 폴더와 index.js 파일 생성   
- index.js 의 목적: 하나의 파일에서 컴포넌트를 가져올 수 있게 한다.

