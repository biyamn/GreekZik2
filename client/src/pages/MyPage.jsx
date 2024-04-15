import React from 'react';

function MyPage() {
  const data = [
    {
      orderDate: '2021-10-01',
      orderAddress: '서울시 강남구',
      productDetail: [
        {
          category: '수제청/시럽',
          items: [
            {
              name: '자몽청',
              price: 50000,
              quantity: 2,
            },
            {
              name: '후추',
              price: 10000,
              quantity: 1,
            },
          ],
        },
        {
          category: '시리얼',
          productDetail: [
            {
              category: '수제청/시럽',
              items: [
                {
                  name: '자몽청',
                  price: 50000,
                  quantity: 2,
                },
                {
                  name: '후추',
                  price: 10000,
                  quantity: 1,
                },
              ],
            },
          ],
        },
      ],
      totalPrice: 150000,
    },
    {
      orderDate: '2021-10-02',
      orderAddress: '서울시 강북구',
      productDetail: [
        {
          category: '수제청/시럽',
          items: [
            {
              name: '자몽청',
              price: 50000,
              quantity: 2,
            },
            {
              name: '후추',
              price: 10000,
              quantity: 1,
            },
          ],
        },
      ],
      totalPrice: 150000,
    },
  ];

  return (
    <div>
      <h1>마이페이지</h1>
      <table border="1">
        <thead>
          <tr>
            <th>주문일자</th>
            <th>주문 주소</th>
            <th>상품 상세 정보</th>
            <th>결제 금액</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order, orderIndex) => (
            <tr key={orderIndex}>
              <td>{order.orderDate}</td>
              <td>{order.orderAddress}</td>
              <td>
                <table>
                  <tbody>
                    {order?.productDetail?.map((category, categoryIndex) => (
                      <React.Fragment key={categoryIndex}>
                        <tr>
                          <td colSpan="3">
                            <b>{category.category}</b>
                          </td>
                        </tr>
                        {category?.items?.map((item, itemIndex) => (
                          <tr key={itemIndex}>
                            <td>{item.name}</td>
                            <td>{item.price}원</td>
                            <td>{item.quantity}개</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </td>
              <td>{order.totalPrice}원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyPage;
