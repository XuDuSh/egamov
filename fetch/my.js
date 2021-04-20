let result = '';
const values = [10, 20, 30]
const URLs = ['https://kodaktor.ru/api/m/',
    'https://kodaktor.ru/api/MS2/',
    'https://kodaktor.ru/api/MS3/'
]
document
    .querySelector('button')
    .addEventListener('click',
        async ({ target: t }) => {
            const headers = { "Content-Type": "application/json" };
            let response = '';
            let sum = [];
            for (i = 0; i < values.length; i++) {
                response = await fetch(URLs[i] + values[i] + '/' + (response.result ? response.result : ''), { headers: { "Content-Type": "application/json" } })
                    .then(x => x.json());
                console.log(response.result);
                sum.push(response.result);
                result = sum.join(", ");
            }
            t.textContent = `Результат: ${result}`;
        }
    );