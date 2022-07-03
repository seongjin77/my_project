const quotes = [
    {
        quote: '일찍 일어나는 새가 더 피곤하다',
        author: '회사원'
    },
    {
        quote: '출근시간 어기면 욕먹고, 퇴근시간 지키면 욕먹고',
        author: '회사원'
    },
    {
        quote: '행복은 회사 밖에 있다.',
        author: '회사원'
    },
    {
        quote: '원수는 회사에서 만난다.',
        author: '회사원'
    },
    {
        quote: '내가 일으킬 수 있는 아주 작은 기적은 밍기적이다.',
        author: '회사원'
    },
    {
        quote: '내가 잘하면 아무도 기억하지 않는다. 내가 못하면 누구도 잊지 않는다.',
        author: '회사원'
    }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText =  randomQuote.quote;