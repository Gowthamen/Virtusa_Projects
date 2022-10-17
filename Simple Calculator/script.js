eqn="";press_count=0;pt_flag=1;
key_list=document.getElementsByClassName("keys");
function add_user_input(symbol,flag){
    var_exp_fl=flag;
    if(press_count==0){
        if(symbol=="0" || symbol=="00")
        {pt_flag=1;}
        else if(var_exp_fl==1){
        if(pt_flag==1){
        document.getElementById("input_area").innerHTML+=symbol;pt_flag=0;}press_count++;}
        else{
        document.getElementById("input_area").innerHTML=symbol;press_count++;pt_flag=1;}
    }
    else{
    document.getElementById("input_area").innerHTML+=symbol;pt_flag=1;}
}
function clear_all(){
    press_count=0;;
    document.getElementById("input_area").innerHTML=0;
}

function evaluate_eqn(){
    if(var_exp_fl==0){
    eqn=document.getElementById("input_area").innerHTML;press_count=0
    document.getElementById("result_area").innerHTML=eval(eqn);}
    else
    alert("Invalid values given")
}