import React, { useState } from 'react';
import ToppingsSummary from './ToppingsSummary';
import AvailableToppings from './AvailableToppings';
import ToppingsCategory from './ToppingsCategory';
import Card from './../UI/Card';
import classes from './Toppings.module.css';


const DUMMY_CATEGORIES = [
  {
    name: '그릭요거트',
    id: 'c1',
    DUMMY_TOPPINGS: [
      {
        id: 't1',
        name: '무가당 그릭요거트(100g)',
        description: '최상급 우유와 유산균 외의 첨가물이 전혀 없는 그릭요거트',
        price: 3500,
      },
      {
        id: 't2',
        name: '망고 그릭요거트(100g)',
        description: '망고의 달콤함과 풍미를 담은 망고 그릭요거트',
        price: 4500,
      },
      {
        id: 't3',
        name: '딸기 그릭요거트(100g)',
        description: '설향딸기의 달콤함을 담은 딸기 그릭요거트',
        price: 4500,
      },
      {
        id: '4',
        name: '황치즈 그릭요거트(100g)',
        description: '세가지 치즈의 깊은 맛을 담은 황치즈 그릭요거트',
        price: 5000,
      },
    ]
  },
  {
    name: '그래놀라',
    id: 'c2',
    DUMMY_TOPPINGS: [
      {
        id: 't1',
        name: '카카오 그래놀라',
        description: '수제로 만든 달콤 쌉싸름한 카카오 그래놀라 한스쿱',
        price: 1500,
      },
      {
        id: 't2',
        name: '얼그레이 그래놀라',
        description: '직접 냉침한 밀크티로 만든 얼그레이 그래놀라 한스쿱',
        price: 1500,
      },
      {
        id: 't3',
        name: '바닐라 그래놀라',
        description: '바닐라빈을 듬뿍 넣은 수제 바닐라 그래놀라 한스쿱',
        price: 1500,
      },
      {
        id: 't4',
        name: '코코넛 그래놀라',
        description: '코코넛청크를 듬뿍 넣은 수제 그래놀라 한스쿱',
        price: 1500,
      },
    ]
  },
  {
    name: '수제청&시럽',
    id: 'c3',
    DUMMY_TOPPINGS: [
      {
        id: 't1',
        name: '딸기청',
        description: '새콤달콤한 설향딸기로 만든 수제 딸기청',
        price: 2000,
      },
      {
        id: 't2',
        name: '블루베리청',
        description: '싱싱한 블루베리로 만든 수제 블루베리청',
        price: 2000,
      },
      {
        id: 't3',
        name: '벌집꿀',
        description: '산지직송한 달콤한 벌집꿀 30g',
        price: 3500,
      },
      {
        id: '4',
        name: '연유',
        description: '달달한 그릭요거트를 원하신다면 최고의 선택',
        price: 1000,
      },
    ]
  },
  {
    name: '시리얼',
    id: 'c4',
    DUMMY_TOPPINGS: [
      {
        id: 't1',
        name: '초코칩',
        description: '인기만점 작은 물방울 모양의 초코칩',
        price: 800,
      },
      {
        id: 't2',
        name: '드라이 마시멜로',
        description: '큰 마시멜로가 부담스러울 때 딱 좋은 미니미 마시멜로',
        price: 1000,
      },
      {
        id: 't3',
        name: '후르츠링',
        description: '새콤달콤한 무지개색의 후르츠링 ',
        price: 800,
      },
      {
        id: '4',
        name: '초코 프레첼',
        description: '묵직하고 달콤한 허쉬의 초코 프레첼',
        price: 1500,
      },
    ]
  },
]

const Toppings = () => {
  const [selectedCategory, setSelectedCategory] = useState('c1');

  const onSelect = (id) => {
    setSelectedCategory(id);
  }

  const toppingsInSelectedCategory = DUMMY_CATEGORIES.filter(category => {
    return category.id === selectedCategory;
  });
  
  return (
    <div className={classes.toppings}>
      <ToppingsSummary />
      <Card>
        <ul>
          <ToppingsCategory
            DUMMY_CATEGORIES={DUMMY_CATEGORIES}
            onSelect={onSelect}
          />
        </ul>
        <AvailableToppings 
          toppingsInSelectedCategory={toppingsInSelectedCategory} 
        />
      </Card>
    </div>
  );
};

export default Toppings;