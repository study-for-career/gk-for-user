    
    const question = document.querySelector('[name="question"]');
    const op1 = document.querySelector('[name="op1"]');
    const op2 = document.querySelector('[name="op2"]');
    const op3 = document.querySelector('[name="op3"]');
    const answer = document.querySelector('[name="answer"]');
    
    const form = document.querySelector('#all-input');
    
    form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    document.querySelector('#submitting').innerHTML = 'Submitting...';
    
    const data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbzWeWBXZTeA6VAOAEGuYq4tE3x_gfx9-FpwT4KzcyypCQww1t1WJyRl3bhNN7-fdqcWNw/exec', {
        method: "POST",
        body: data
    })
    
    .then(res => res.text())
    .then(data => {
        document.querySelector('#submitting').innerHTML = data;
        question.value = '';
        op1.value = '';
        op2.value = '';
        op3.value = '';
        answer.value = '';
    })
    })
