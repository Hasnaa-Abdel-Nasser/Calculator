let number='';
let lastNumber='';
let valid=false;
let check=false;
let operation='';
let result=0;
let total=''
let screen = document.getElementById('screen');

function numbers(num){
    if(!valid){
        number+=num;
    }else{
        lastNumber+=num;
    }
    if(screen.innerText == '0'){
        screen.innerHTML=num;
    }else{
        screen.innerHTML+=num;
    }
    total+=num;
    ScreenStyle()
}

function Operation(operate){
    if((number == '' || number=='-') &&  operate != '-') return;
    if(number == '' && operate == '-'){
        number='-';
        total+=operate;
    }else if(!check && number != '-'){
        operation = operate;
        valid=true;
        check=true;
        total+=operate;
    }
    screen.innerHTML= total;
    ScreenStyle()
}

function Clear(){
    [number , lastNumber , operation , result , valid , check , total] = ['','','',0,false,false,''];
    screen.innerHTML= '0';
}

function equal(op){
    if(number && lastNumber && operation){
        switch(operation){
            case '+': result =+lastNumber + +number;
            break;
            case '-': result = +number - lastNumber;
            break;
            case 'x': result = +lastNumber * +number;
            break;
            case '/':  result = +number / +lastNumber;
            break;
        }
        if(result != Infinity){
            total = ''+result||'0';
            number = result||'0';
        }else{
            total = '0';
            number = '';
        }
        lastNumber='';
        valid=false;
        check = false;

    }else if(number && operation){
        result = number;
        total = ''+result;
        valid = false;
        check = false;
    }
    screen.innerHTML = total;
    if(op != '=') Operation(op)
    ScreenStyle()

}

function Delete(){
    let last = total[total.length - 1];
    console.log(last)
   if(last <= 9){
        if(lastNumber){
            lastNumber = lastNumber.slice(0,-1);
            total = total.slice(0,-1)
            screen.innerHTML = total
        }else if(result){
            let R = ''+result;
            R = R.slice(0,-1);
            result = +R || 0;
            number= ''+result;
            total = ''+result;
            screen.innerHTML = total;
        }else{
            number = number.slice(0,-1);
            total = number;
            screen.innerHTML = total;
        }
   }else if(last != '.'){
        total = total.slice(0,-1)
        screen.innerHTML = total;
        check=false;
        operation ='';
        valid=false;
   }
}

function ScreenStyle(){
    if(total.length > 20){
        screen.style.fontSize='15px'
    }
}