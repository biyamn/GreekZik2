const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const data = [
  {
    name: '그릭요거트',
    id: 'ca1',
    DUMMY_TOPPINGS: [
      {
        id: 'a1',
        name: '무가당(100g)',
        description: '첨가물이 전혀 없는 그릭요거트',
        price: 3500,
        amount: 1,
      },
      {
        id: 'a2',
        name: '망고맛(100g)',
        description: '망고의 달콤함과 풍미를 담은 망고 그릭요거트',
        price: 4500,
        amount: 1,
      },
      {
        id: 'a3',
        name: '딸기맛(100g)',
        description: '설향딸기의 달콤함을 담은 딸기 그릭요거트',
        price: 4500,
        amount: 1,
      },
      {
        id: 'a4',
        name: '황치즈맛(100g)',
        description: '체다치즈의 깊은 맛을 담은 황치즈 그릭요거트',
        price: 5000,
        amount: 1,
      },
      {
        id: 'a5',
        name: '무가당(100g)',
        description: '첨가물이 전혀 없는 그릭요거트',
        price: 3500,
        amount: 1,
      },
      {
        id: 'a6',
        name: '망고맛(100g)',
        description: '망고의 달콤함과 풍미를 담은 망고 그릭요거트',
        price: 4500,
        amount: 1,
      },
      {
        id: 'a7',
        name: '딸기맛(100g)',
        description: '설향딸기의 달콤함을 담은 딸기 그릭요거트',
        price: 4500,
        amount: 1,
      },
      {
        id: 'a8',
        name: '황치즈맛(100g)',
        description: '체다치즈의 깊은 맛을 담은 황치즈 그릭요거트',
        price: 5000,
        amount: 1,
      },
    ]
  },
  {
    name: '그래놀라',
    id: 'ca2',
    DUMMY_TOPPINGS: [
      {
        id: 'b1',
        name: '카카오 그래놀라',
        description: '수제로 만든 달콤 쌉싸름한 카카오 그래놀라',
        price: 1500,
        amount: 1,
      },
      {
        id: 'b2',
        name: '얼그레이 그래놀라',
        description: '직접 냉침한 밀크티로 만든 얼그레이 그래놀라',
        price: 1500,
        amount: 1,
      },
      {
        id: 'b3',
        name: '바닐라 그래놀라',
        description: '바닐라빈을 듬뿍 넣은 수제 바닐라 그래놀라',
        price: 1500,
        amount: 1,
      },
      {
        id: 'b4',
        name: '코코넛 그래놀라',
        description: '코코넛청크를 듬뿍 넣은 수제 그래놀라',
        price: 1500,
        amount: 1,
      },
      {
        id: 'b5',
        name: '카카오 그래놀라',
        description: '수제로 만든 달콤 쌉싸름한 카카오 그래놀라',
        price: 1500,
        amount: 1,
      },
      {
        id: 'b6',
        name: '얼그레이 그래놀라',
        description: '직접 냉침한 밀크티로 만든 얼그레이 그래놀라',
        price: 1500,
        amount: 1,
      },
      {
        id: 'b7',
        name: '바닐라 그래놀라',
        description: '바닐라빈을 듬뿍 넣은 수제 바닐라 그래놀라',
        price: 1500,
        amount: 1,
      },
      {
        id: 'b8',
        name: '코코넛 그래놀라',
        description: '코코넛청크를 듬뿍 넣은 수제 그래놀라',
        price: 1500,
        amount: 1,
      }
    ]
  },
  {
    name: '수제청&시럽',
    id: 'ca3',
    DUMMY_TOPPINGS: [
      {
        id: 'c1',
        name: '딸기 수제청',
        description: '새콤달콤한 설향딸기로 만든 수제 딸기청',
        price: 2000,
        amount: 1,
      },
      {
        id: 'c2',
        name: '블루베리 수제청',
        description: '싱싱한 블루베리로 만든 수제 블루베리청',
        price: 2000,
        amount: 1,
      },
      {
        id: 'c3',
        name: '벌집꿀',
        description: '산지직송한 달콤한 벌집꿀 30g',
        price: 3500,
        amount: 1,
      },
      {
        id: 'c4',
        name: '연유',
        description: '부드러움과 달달함을 더하는 연유',
        price: 1000,
        amount: 1,
      },
      {
        id: 'c5',
        name: '딸기 수제청',
        description: '새콤달콤한 설향딸기로 만든 수제 딸기청',
        price: 2000,
        amount: 1,
      },
      {
        id: 'c6',
        name: '블루베리 수제청',
        description: '싱싱한 블루베리로 만든 수제 블루베리청',
        price: 2000,
        amount: 1,
      },
      {
        id: 'c7',
        name: '벌집꿀',
        description: '산지직송한 달콤한 벌집꿀 30g',
        price: 3500,
        amount: 1,
      },
      {
        id: 'c8',
        name: '연유',
        description: '부드러움과 달달함을 더하는 연유',
        price: 1000,
        amount: 1,
      }
    ]
  },
  {
    name: '시리얼',
    id: 'ca4',
    DUMMY_TOPPINGS: [
      {
        id: 'd1',
        name: '초코칩',
        description: '인기만점 작은 물방울 모양의 초코칩',
        price: 800,
        amount: 1,
      },
      {
        id: 'd2',
        name: '드라이 마시멜로',
        description: '그릭요거트에 딱 좋은 미니 마시멜로',
        price: 1000,
        amount: 1,
      },
      {
        id: 'd3',
        name: '후르츠링',
        description: '새콤달콤한 무지개색의 후르츠링 ',
        price: 800,
        amount: 1,
      },
      {
        id: 'd4',
        name: '초코 프레첼',
        description: '묵직하고 달콤한 허쉬의 초코 프레첼',
        price: 1500,
        amount: 1,
      },
      {
        id: 'd5',
        name: '초코칩',
        description: '인기만점 작은 물방울 모양의 초코칩',
        price: 800,
        amount: 1,
      },
      {
        id: 'd6',
        name: '드라이 마시멜로',
        description: '그릭요거트에 딱 좋은 미니 마시멜로',
        price: 1000,
        amount: 1,
      },
      {
        id: 'd7',
        name: '후르츠링',
        description: '새콤달콤한 무지개색의 후르츠링 ',
        price: 800,
        amount: 1,
      },
      {
        id: 'd8',
        name: '초코 프레첼',
        description: '묵직하고 달콤한 허쉬의 초코 프레첼',
        price: 1500,
        amount: 1,
      }
    ]
  },
]

app.get("/api", (req, res) => {
  res.json(data)
})

app.listen(5000, () => {console.log("Server started on port 5000")})