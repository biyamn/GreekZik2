# 그릭요거트 주문 앱

## 📜 프로젝트 소개

토핑을 선택하여 장바구니에 추가하고 주문할 수 있는 그릭요거트트 주문앱입니다.

## 🔗 배포 링크

https://greekzik.biyamn.dev

<br>

## 💡 주요 페이지 및 기능

각 카테고리에서 각기 다른 종류의 그릭요거트 토핑을 선택 후 수량을 지정하여 장바구니에 추가할 수 있습니다.
장바구니 버튼을 누르면 모달이 뜨며 담은 재료의 상세 정보와 총액을 확일할 수 있습니다.

<br>

## 💁‍♀️ 데모

<img src="https://user-images.githubusercontent.com/101965666/236651826-bcd640db-33da-463a-bc24-4e100e7fb352.gif" width="80%">

<br>

## 📜 구현 과정과 결과

### 1. 와이어프레임

- 피그마로 와이어프레임을 구성했습니다.
- 와이어프레임과 동일한 UI를 구성하였습니다.
- 구조를 세분화하여 컴포넌트를 나눴습니다.
- **구현 과정을 담은 포스팅**: <a href='https://velog.io/@hamham/%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88-1%ED%83%84-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9D%B4%EB%B0%8D'>[주문앱 1탄] UI 만들기</a>
- **구현 결과**:

  <img src='https://user-images.githubusercontent.com/101965666/236651925-d56521bf-46c6-4349-9845-dbf0a3066bcd.png'>

<br>

### 2. 카테고리 기능

- 토핑의 종류에 따라 `그릭요거트`, `그래놀라`, `수제청&시럽`, `시리얼` 카테고리를 생성했습니다.
- **구현 과정을 담은 포스팅**: <a href='https://velog.io/@hamham/%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88-2%ED%83%84-%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC-%EB%A7%8C%EB%93%A4%EA%B8%B0'>[주문앱 2탄] 카테고리 만들기</a>
- **구현 결과**:

  <img src='https://user-images.githubusercontent.com/101965666/236651932-d863d0ab-d115-4ad9-8ef6-eb8adc6e6134.gif'>

<br>

### 3. 모달

- Portal로 모달을 구현했습니다.
- 닫기 버튼과 모달 바깥쪽 클릭시 모달이 닫히는 기능을 추가했습니다.
- **구현 과정을 담은 포스팅**: <a href='https://velog.io/@hamham/%EC%A3%BC%EB%AC%B8%EC%95%B1-3%ED%83%84-Portal%EB%A1%9C-%EB%AA%A8%EB%8B%AC-%EB%A7%8C%EB%93%A4%EA%B8%B0'>[주문앱 3탄] Portal로 모달 만들기</a>
- **구현 결과**:

  <img src='https://user-images.githubusercontent.com/101965666/236651927-5a630192-fdbf-4c93-8ed5-71ffca4d5ce2.gif'>

<br>

### 4. 장바구니 담기 기능

- 토핑 수량 선택 후 담기 버튼을 누르면 장바구니에 재료가 담기는 기능을 구현했습니다.
- **구현 과정을 담은 포스팅**: <a href='https://velog.io/@hamham/%EC%A3%BC%EB%AC%B8%EC%95%B1-4%ED%83%84-%EB%8B%B4%EA%B8%B0-%EA%B8%B0%EB%8A%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0'>담기 기능 만들기(1)</a>
- **구현 결과**:

  <img src='https://user-images.githubusercontent.com/101965666/236651953-114201fa-b96b-4b11-85d5-5b15bce8cec0.gif'>

<br>

### 5. 시행착오 기록

- 카테고리 기능을 만들며 경험한 9가지의 시행착오와 이를 해결한 과정을 기록했습니다.
- **구현 과정을 담은 포스팅**: <a href='https://velog.io/@hamham/%EC%A3%BC%EB%AC%B8%EC%95%B1-5%ED%83%84-%EC%8B%9C%ED%96%89%EC%B0%A9%EC%98%A4-%EB%AA%A8%EC%9D%8Ckey-state'>[주문앱 5탄] 시행착오 모음(key, state)</a>
- **구현 결과**:

  <img src='https://user-images.githubusercontent.com/101965666/236651958-6a582e29-de5b-4c90-bfb9-9f187a7f8b48.gif'>

<br>

### 6. 장바구니 담기 기능 완성

- 장바구니 안에서 수량 추가/감소 기능을 구현했습니다.
- 장바구니 안에서 재료 삭제 기능을 구현하였습니다.
- 담은 재료가 장바구니에 이미 있으면 정보를 누적해서 보여주는 기능을 구현했습니다.
- **구현 과정을 담은 포스팅**: <a href='https://velog.io/@hamham/%EC%A3%BC%EB%AC%B8%EC%95%B1-6%ED%83%84-%EB%8B%B4%EA%B8%B0-%EA%B8%B0%EB%8A%A5-%EB%A7%8C%EB%93%A4%EA%B8%B02'>[주문앱 6탄] 담기 기능 만들기(2)</a>
- **구현 결과**:

  <img src='https://github.com/biyamn/GreekYogurt-Order-App/assets/101965666/da1b3cd5-e59b-41d5-be8c-892156d4515e'>

<br>

### 7. 리팩토링(useReducer)

- reducer를 사용하여 그릭요거트 주문앱을 리팩토링했습니다.
- **구현 과정을 담은 포스팅**: <a href='https://velog.io/@hamham/%EC%A3%BC%EB%AC%B8%EC%95%B1-7%ED%83%84-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%ED%95%98%EA%B8%B0useReducer-Hook-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-pm7pggvk'>[주문앱 7탄] 리팩토링하기(useReducer)</a>

<br>

### 8. 리팩토링(useReducer)

- context API를 사용하여 그릭요거트 주문앱을 리팩토링했습니다.
- **구현 과정을 담은 포스팅**: <a href='https://velog.io/@hamham/%EC%A3%BC%EB%AC%B8%EC%95%B1-7%ED%83%84-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%ED%95%98%EA%B8%B0useContext'>[주문앱 8탄] 리팩토링하기(useContext)</a>

<br>
