### 이후에 '리팩토링' 관련 블로그 포스팅을 하기 위한 메모
#### useReducer
- 얘를 먼저 적용한 다음 useContext를 해야겠음.
- reducer 함수 안에 setState가 있으면 어떡하지? -> state와 setState를 바꾼게 reducer 함수임. 그래서 안에 setState가 있을리 없음. setState의 개념이 reducer 함수임. 그래서 만약 setState(1)이었다면 안에서 return 1 이런식으로 되어야 함.
예) 
```jsx
case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    } 
```
#### useContext
- <a href='https://react.dev/learn/passing-data-deeply-with-context'>공식문서: Passing Data Deeply with Context</a>를 읽고 있음
- passing props로 먼저 시작해서 context 과사용을 줄이라고 한다.
- context를 사용하는 상황에 대해서도 설명하고 있음

- 궁금증: 모든 state를 store에서 관리하는 건가?? 근데 보니까 그건 또 아니던데. App에서 cartIsShown을 관리하고 있음(store에 넣지 않고)


