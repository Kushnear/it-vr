export default () => fetch('http://172.20.10.8:8000/img')
    .then(res => res.json())