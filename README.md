# 그릭요거트 주문 앱

<div align="center">
  <img src='https://github.com/biyamn/GreekZik/assets/101965666/e9d12b30-4627-4787-8e0c-04bc9a927921' width="60%"/>

**배포 링크**: 추가 예정

</div>

<br>

## 프로젝트 실행 방법

```
$ npm install
$ npm run dev
```

<br>

## 그릭직 소개

그릭요거트를 커스텀해서 주문할 수 있는 주문앱입니다.
각 카테고리에서 각기 다른 종류의 그릭요거트 토핑을 선택 후 수량을 지정하여 장바구니에 추가할 수 있습니다.
장바구니 버튼을 누르면 모달이 뜨며 담은 재료의 상세 정보와 총액을 확일할 수 있습니다.

<br>

## 기능 소개

### 토핑 카테고리 선택하기

- 토핑 카테고리를 선택하여 다양한 토핑을 선택할 수 있습니다.

| <img src='https://github.com/biyamn/GreekZik/assets/101965666/99476674-c099-4360-b4b7-cc454e676c5a' style="width: 50%" /> |
| :-----------------------------------------------------------------------------------------------------------------------: |
|                                                  토핑 카테고리 선택하기                                                   |

### 장바구니에 담기

- 선택한 토핑을 장바구니에 담을 수 있습니다.

| <img src='https://github.com/biyamn/GreekZik/assets/101965666/0047a910-7f42-474e-94b5-15c12a68dec8' style="width: 50%" /> |
| :-----------------------------------------------------------------------------------------------------------------------: |
|                                                      장바구니에 담기                                                      |

<br>

## 기술 스택

- Frontend
  - HTML5, CSS3
  - JavaScript
  - React.js
- Backend
  - Firebase

<br>

## 폴더 구조

```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂Cart
 ┃ ┣ 📂Layout
 ┃ ┣ 📂SelectTopping
 ┃ ┣ 📂Toppings
 ┃ ┃ ┣ 📂ToppingItem
 ┃ ┗ 📂UI
 ┣ 📂store
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜main.css
 ┗ 📜main.jsx
```

<br>

## 구현 과정 블로깅

- <a href='https://velog.io/@hamham/%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88-1%ED%83%84-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9D%B4%EB%B0%8D'>[주문앱 1탄] UI 만들기</a>
- <a href='https://velog.io/@hamham/%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88-2%ED%83%84-%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC-%EB%A7%8C%EB%93%A4%EA%B8%B0'>[주문앱 2탄] 카테고리 만들기</a>
- <a href='https://velog.io/@hamham/%EC%A3%BC%EB%AC%B8%EC%95%B1-3%ED%83%84-Portal%EB%A1%9C-%EB%AA%A8%EB%8B%AC-%EB%A7%8C%EB%93%A4%EA%B8%B0'>[주문앱 3탄] Portal로 모달 만들기</a>
- <a href='https://velog.io/@hamham/%EC%A3%BC%EB%AC%B8%EC%95%B1-4%ED%83%84-%EB%8B%B4%EA%B8%B0-%EA%B8%B0%EB%8A%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0'>[주문앱 4탄] 담기 기능 만들기(1)</a>
- <a href='https://velog.io/@hamham/%EC%A3%BC%EB%AC%B8%EC%95%B1-5%ED%83%84-%EC%8B%9C%ED%96%89%EC%B0%A9%EC%98%A4-%EB%AA%A8%EC%9D%8Ckey-state'>[주문앱 5탄] 시행착오 모음(key, state)</a>
- <a href='https://velog.io/@hamham/%EC%A3%BC%EB%AC%B8%EC%95%B1-6%ED%83%84-%EB%8B%B4%EA%B8%B0-%EA%B8%B0%EB%8A%A5-%EB%A7%8C%EB%93%A4%EA%B8%B02'>[주문앱 6탄] 담기 기능 만들기(2)</a>
- <a href='https://velog.io/@hamham/%EC%A3%BC%EB%AC%B8%EC%95%B1-7%ED%83%84-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%ED%95%98%EA%B8%B0useReducer-Hook-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-pm7pggvk'>[주문앱 7탄] reducer로 리팩토링하기</a>
- <a href='https://velog.io/@hamham/%EC%A3%BC%EB%AC%B8%EC%95%B1-7%ED%83%84-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%ED%95%98%EA%B8%B0useContext'>[주문앱 8탄] context API로 리팩토링하기</a>
- <a href='https://velog.io/@hamham/%EC%A3%BC%EB%AC%B8%EC%95%B1-9%ED%83%84-API-%ED%98%B8%EC%B6%9C%ED%95%98%EA%B8%B0useEffect-asyncawait-useState'>[주문앱 9탄] API 호출하기(& useEffect)</a>

<br>

## 구현 기능 목록

<details>
<summary>구현 기능 목록</summary>
<div>

### UI

- [x] 와이어프레임 피그마
- [x] 와이어프레임 구현
- [x] 컴포넌트 나누기
- [x] 모달 UI
- [x] 카드형으로
- [ ] CSS Module ⇒ styled-components 리팩토링

### Feature

- [x] 카테고리 기능 구현
- [x] 서버 연동
- [x] 모달 열기, 닫기
- [x] 장바구니 총계 구현
- [x] `+담기` 버튼 누르면 장바구니에 재료 담기
- [x] 담은 수량이랑 장바구니 안 수량이랑 동기화
- [x] 장바구니 안에서 +, - 기능 구현
- [x] 장바구니에서 같은 재료면 누적해서 보여주기
- [x] 장바구니 안에서 삭제 기능 구현
- [ ] `+담기` 버튼 누르면 해당 수량 초기화
- [ ] 전체 삭제 버튼 만들기
- [ ] 주문하기 기능(POST 요청)
- [x] 한그릇이 아니라 여러 그릇 선택할 수 있게 하기
  - [x] 메인페이지에서 그릭요거트 선택 후 요거트모달에서 토핑 선택하도록
  - [x] 요거트모달 show, hide를 상태로 관리
  - [x] 요거트모달 스크롤 가능하게 하기
  - [x] 그릭요거트 수량 선택 가능하도록
  - [x] 토핑용 장바구니 추가
- [x] 모달 분리(MainModal, SubModal, SelectModal)
- [ ] MainCart 객체 형식으로 수정
  - [ ] 한그릇 `담기` 기능, 버튼 추가(context API 변경)
  - [ ] main 장바구니에 그릇 단위로 담기는 기능 추가
- [ ] 결제 창 만들기
- [ ] PG 연결
- [x] nav bar - 그릭요거트/게시판/소개/내정보/장바구니 만들기
- [ ] 메인 페이지 레이아웃
  - [ ] 컴포넌트 3개로 나누기(navigation, menu, cart)
  - [ ] navigation에서 custom, finished로 라우팅 설정하기

### Refactor

- [x] state 분해하기: ToppingItemForm에서 itemState 중 바뀌는 건 amount 하나 뿐인데 갱신할 때마다 모든 상태를 복사해야 함
- [x] fetch 대신 swr이나 react-query나 tanstack/query 써보기
- [ ] JavaScript ⇒ TypeScript 마이그레이션
- [x] fetch → axios 리팩토링
- [x] props drilling 피하기(재정의 필요 없는 것부터 지우기)
- [x] destructuring 활용하기: React에서 props는 언제나 object이므로 1 단계 destructuring은 언제나 성공하기 때문에
- [x] context API 사용하여 한군데에서 state 관리하기
- [x] useReducer로 state 대체하기
- [x] node.js 대신 firebase에 GET, POST 요청 보낼 수 있게 하기
- [ ] eslint, prettier 적용하기

<br>

</div>
</details>

<br>
