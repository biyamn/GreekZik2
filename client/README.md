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
- action이 무엇이냐? dispatch 안에 있는 게 action임. 처음봐서 다 헷갈린다 
- 오 switch는 각 case가 같은 scope라서 같은 변수 선언이 안되는 건가 if는 되는데! 맞고, 해결 방법도 있었음: https://dev.to/robogeek95/scoping-variables-in-the-switch-statement-1gig
- onSave를 도저히 살릴 수가 없음!! 왜냐면 여기서 reducer가 아닌 state를 쓰고있기 때문ㅇ....ㄱ
#### useContext
- <a href='https://react.dev/learn/passing-data-deeply-with-context'>공식문서: Passing Data Deeply with Context</a>를 읽고 있음
- passing props로 먼저 시작해서 context 과사용을 줄이라고 한다.
- context를 사용하는 상황에 대해서도 설명하고 있음

- 궁금증: 모든 state를 store에서 관리하는 건가?? 근데 보니까 그건 또 아니던데. App에서 cartIsShown을 관리하고 있음(store에 넣지 않고)


