renderCategoryMenu('.admin-sidebar', CategoryMenuApi);
const visitorsChartEle = document.getElementById('visitors__chart');
const revenuesChartEle = document.getElementById('revenues__chart');
const bestSellCategoryChartEle = document.getElementById('bestSellCategory__chart');

const fakeVisitorChartData = {
    labels: getLabelMonth(1, new Date().getMonth() + 1),
    datasets: [
        {
            label: 'Lượt vào trang (người)',
            data: [9230, 4230, 2230, 5050, 12310, 4440, 12300, 15123, 19561, 10320, 2100],
            fill: true,
            borderWidth: 1,
            borderColor: '#ef4444',
            backgroundColor: '#ef444444',
            tension: 0.1,
        },
    ],
};

const fakeRevenuesChartData = {
    labels: getLabelMonth(1, new Date().getMonth() + 1),
    datasets: [
        {
            label: 'Doanh thu (triệu đồng)',
            data: [400, 300, 200, 165, 200.3001, 404.104, 323.0, 1200.0, 1500.0, 1200.0032, 500],
            fill: true,
            borderWidth: 1,
            borderColor: '#fbbf24',
            backgroundColor: '#fbbf2444',
            tension: 0.1,
        },
    ],
};

const fakeBestSellCategoryCartData = {
    labels: [
        'Laptop',
        'Máy tính',
        'Bộ nhớ lưu trữ',
        'Linh kiện máy tính',
        'Apple',
        'Màn hình',
        'Chuột',
        'Bàn phím',
        'Tai nghe - Loa',
        'Bàn - Ghế',
        'Phụ kiện',
    ],
    datasets: [
        {
            label: 'Doanh thu các mặt hàng (triệu đồng)',
            data: [1431, 1300, 250, 1853, 300.3001, 104.104, 57.0, 60.0, 80.0, 100.0032, 20],
            fill: true,
            borderWidth: 1,
            borderColor: '#3b82f6',
            backgroundColor: '#3b82f644',
            tension: 0.1,
        },
    ],
};
const visitorsChart = new Chart(visitorsChartEle, {
    type: 'line',
    data: fakeVisitorChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

const revenuesChart = new Chart(revenuesChartEle, {
    type: 'line',
    data: fakeRevenuesChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

const bestSellCategoryChart = new Chart(bestSellCategoryChartEle, {
    type: 'bar',
    data: fakeBestSellCategoryCartData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
